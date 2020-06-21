# Yeonit, 연잇

**연달아 이어가는 우리의 끝말잇기 이야기, 연잇.**

> Refactoring the whole repository for more clean code.

## Table of Content

- [Concept](#Concept)
- [Copyright](#Copyright)
- [Installation](#Installation)
- [Development](#Development)

---

# Concept

Our prototype is the one of online word tagging platforms 'Kkutu'. However, to improve the outline of the game and in-game experience, I thought I need to build a new word tagging game platform.

## What is the word tag game?

Word tag game is also known as 'Word chains', 'Last and first', 'Grab one behind' and 'Shiritori'(Japanese).

### How it will be going on online?

Players should say the next word which starts with the last letter from the given word or the last letter from the word another player said. If someone failed to say the word in time, he/she will lose the game.

It is including simple rules. However, the game will get harder as the game goes. It is because of the limit of playtime. Total playtime is a minute and it can be changed by the game starter before the game started.

## Changes from 'Kkutu'(prototype)

Our main goal is a healthy community of the game and project. The prototype software of the current project called 'Kkutu' is also one of the word tag game platforms. However, its community is suffering from a lot of community-based crackers and poor in-game experiences.

# Copyright

The copyright problem is often occurring in the open-source project. You should protect the copyright of contributors who worked on this project. Also, you can contact the copyright holder and agents who worked on this project. If you have anything you want to report, please contact [copyright holders](#Copyright-holders) or submit an issue.

- This repository is under [AGPL v3](./LICENSE).

*All links refer to an email address.*

## Copyright holders

- [Seia-Soto](mailto:seia@outlook.kr)

## Contributors

There are no contributors except for the above copyright holders.

# Installation

To install the application, you need to get basic things(as of latest stable version) specified below(bold item is essential):

- **[Node.JS](http://nodejs.org) v10**, using __NVM__ is highly recommended.
  - **[NPM](https://docs.npmjs.com)**, installed with Node.JS
- **[Redis](https://redis.io/download)**, to store application data
- **[MySQL](https://www.mysql.com/downloads/)** or **[MariaDB](https://mariadb.org/download/)**
- [Nginx](https://nginx.org/en/download.html), highly recommended for security.
- [PM2](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#installation), highly recommended for clustering.
- [Git SCM](https://git-scm.com/downloads), for cloning this project.
