pm2 stop server
pm2 kill
git fetch origin
cd client
npm run build
pm2 start server.js