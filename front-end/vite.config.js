
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const mockApi = () => ({
  name: 'mock-api',
  configureServer(server) {
    server.middlewares.use('/api/mockData', (req, res, next) => {
      if (req.method !== 'GET' || req.url.split('?')[0] !== '/') {return next()}
      const file = path.resolve('mock/mockData.json')

      if (!fs.existsSync(file)) return next()

      res.setHeader('Content-Type', 'application/json')
      res.end(fs.readFileSync(file))
    })
  }
})

export default defineConfig({
  plugins: [react(), mockApi()],
})
