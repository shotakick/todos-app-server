# todos用アプリケーションサーバ
TypeScript + Node.js + Express + MongoDBによる簡易TODOアプリケーションサーバ実装

## フロントエンド実装
- [todos](https://github.com/shotakick/todos)

## ざっくり開発方針
- API Server
  - RESTful API
- Storage
  - User Data(Todos and Accounts)
    - MongoDB
  - Login Sessions
    - Redis
- Development Environment
  - Visual Studio Code Remote Development
    - Remote - Containers
- Testing
  - Jest
- Deployment
  - Docker(Alpine Linux Base)
  - CircleCI: GitHub to Heroku
