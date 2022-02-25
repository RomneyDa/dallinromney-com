pm2 stop server
pm2 kill
git fetch origin
cd client
npm i
npm run build
cd ..
npm i
pm2 start server.js