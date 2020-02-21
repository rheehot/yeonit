# Yeonit, 연잇

**연달아 이어가는 우리의 끝말잇기 이야기, 연잇.**

This GitHub opensource repository is for the Online word tagging game platform, Yeonit.

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
- [Helloyunho](mailto:yunho050840@gmail.com)

## Contributors

There are no contributors except for the above copyright holders.

# Installation

To install the application, you need to get basic things(as of latest stable version) specified below(bold item is essential):

- **[Node.JS](http://nodejs.org)**, you can [install via Package Manager](https://nodejs.org/en/download/package-manager/).
  - **[NPM](https://docs.npmjs.com)**, installed with Node.JS
- **[Redis](https://redis.io/download)**, to store application data
- **[MySQL](https://www.mysql.com/downloads/)** or **[MariaDB](https://mariadb.org/download/)**
- [Nginx](https://nginx.org/en/download.html), highly recommended for security.
- [PM2](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#installation), highly recommended for clustering.
- [Git SCM](https://git-scm.com/downloads), for cloning this project.

## Installation guide

This guide will explain how to set up `Yeonit` on your server using Ubuntu version 18.04.

1. Get super-user permission on your shell

You need to get permission to use `sudo`. If you don't want to use the below command(`sudo su`), you can prefix commands with `sudo` instead.

```shell
sudo su
```

2. Update your system (optional, highly recommended)

Commonly, we need to update the system to the latest version for stability.

```shell
apt update -y
apt upgrade -y
```

3. Install required packages into the system

In this time, we're going to use Nginx for our proxy server of Express.JS. Also, as I specified the link that explaining how to install Node.JS via the package manager, we need to set up the source of the package(Node.JS) first.

> We recommend using NVM instead.

```shell
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

apt install nginx mariadb-server redis-server nodejs -y
```

After we installed the required packages, we need to set up them as service. The command below will make your system to start the packages on boot.

```shell
systemctl enable redis-server.service
systemctl enable mariadb
systemctl enable nginx
```

4. Set up the database

Starting with the database, I am recommending you to reply to all options with `y`.

```shell
mysql_secure_installation
```

After you set up the basic environment of the MySQL database, make a new database for `Yeonit` and create required tables.

```shell
mariadb
```

5. Set up the project

Now, we're going to work with Node.JS. Before, we start, install PM2 to cluster and run 24/7 the application.

```shell
npm install -g pm2
```

After you installed the PM2, clone the `Yeonit` and install dependencies.

```shell
git clone https://github.com/yeonit/yeonit.git
cd yeonit

# in the folder `yeonit`
npm install
```

6. Configure the application options and start the application

Copy the sample config file and edit the new config.

- **You need to [get the Google credential API key and secret](https://console.developers.google.com/apis/credentials).** (Use `https://YOUR_ADDRESS.TLD/session/authentication/google/callback` for authorized redirection URI)
- **You must change the value of `session.secret` to prevent security issues about the session.**

```shell
cp config.sample.js config.js
vim config.js
```

So far, we set up the environment, and now, we can start the application.

```shell
# Using PM2 with clustering 4 processes
pm2 start app.js --name yeonit -i 4

# Commonly
npm start
```

7. Include Nginx config file into your virtual host config (optional, highly recommended)

```nginx
server {
  listen 80;

  ...

  location / {
    include %PATH_TO_REPO%/.nginx.conf;
  }
}
```

After you include your settings, reload the Nginx with the new config.

```shell
service nginx reload
```

# Development

The development documentation for this project.

## Table of Contents in Development

- [Development rules](#Development-rules)
- [Application structure](#Application-structure)
- [Routings](#Routings)

## Development rules

- You may set up the project following the installation guide above.
- You have to install Linter with `standard.js` configuration and keep the rules.
- You may check the `yarn.lock` file before you start because it is not sure if it is up to date.
- You're recommended to develop with the latest version of Node.JS and its dependencies. (Allowed to update packages with PRs, but for clean code, I recommend updating dependencies every new release)
- You must use 2 spaces for indent config.
- You're recommended to create modules to reduce errors from each logic, but make sure it is working. If you don't sure, please contact co-workers and request reviews to prevent hard debugging on other logics' errors.

## Application structure

The main entry point of this project is `app.js` as specified in `npm start` command.

| Name of folder(or modules) | Description                                         |
|-:--------------------------|-:---------------------------------------------------|
| etc                        | Content which is not belong to the logical sources. |
| handlers                   | Handler functions of Express.JS routers.            |
| middlewares                | Middlewares of Express.JS, not handlers at the end. |
| public                     | Static contents, not belong to server-side sources. |
| routes                     | Routers of Express.JS.                              |
| structures                 | A set of functional sources.                        |
| views                      | HTML rendering scripts(pug.js).                     |

## Routings

(N/A yet)
