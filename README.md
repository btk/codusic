# Codusic

Generates a list of most listened tracks inside your project file by using your LastFM data.

> PROTIP: Keep spelling in mind **(code + music = codusic)**

## How does it work?

LastFM is a platform that works by curating what you listen to on your PC, phone etc. It has support for popular listening platforms like Spotify. If you are listening locally, you can also have your LastFM account hooked to your favorite music player software.

Codusic checks your LastFM data and generates a .md file in your project (codusic.md) and links that file to your README.md file. This way others can see what you listened to while creating your awesome project.

## Installation & Use

Install global module of codusic.

```
npm install -g codusic
```

Now you are good to go, see your options for codusic by;

```
codusic -h
```

Initilize your codusic with your lastfm account.

```
codusic init
```

Follow the form and this will create a codusic.json file in your project folder (wherever your are initilizing codusic). It will ask your **lastfm username** and **how long you have been working on** this project.


Then as mentioned, this command will create a file called codusic.md which contains your popular track list. It will then link it to your readme.md file.

[](https://raw.githubusercontent.com/btk/codusic/master/screenshot.png)

## Why?

Have you ever wondered which tracks the developer of a project has been listening while coding it? Well, I did.

I was wondering if it was helping me to listen music while coding, and if so, which genre was the best in this aspect. My main goal is to easily get data from hundreds of projects and compare the genres with coding quality. I don't know how to do that yet, but codusic is a starting point for gathering data.

[Top Tracks Listened While Coding This Project - Codusic](codusic.md)

## Working Screenshot


![alt tag](https://github.com/btk/codusic/blob/master/screenshot.png)

