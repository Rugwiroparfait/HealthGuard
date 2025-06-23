#!/bin/bash
# Start both frontend and backend development servers

# Start backend
cd backend
python manage.py runserver &
BACKEND_PID=$!
echo "Backend started with PID $BACKEND_PID"

# Start frontend
cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo "Frontend started with PID $FRONTEND_PID"

# Handle termination signals
trap "kill $BACKEND_PID $FRONTEND_PID; exit" SIGINT SIGTERM

# Keep script running
wait
