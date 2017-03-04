# Codusic

Generates a list of most listened tracks in your inside your project file by using your LastFM data.

> PROTIP: To keep the spelling in mind **(code + music = codusic)**

## How does it work?

Lastfm is a platform that works by crawing what you listen on your pc, phone etc. It has support for popular listening platforms like Spotify. If you are listening on local, you can also have your lastfm account hooked to your favorite music player software.

Codusic, checks your lastfm data and generates a .md file in your project, (codusic.md) and links that file to your README.md file. This way others can see what you listened while creating your awesome project.

## Installing & Using

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
codusic
```

Follow the form and this will create a codusic.json file in your project folder (wherever your are initilizing codusic). It will ask your your **lastfm username** and **how long have you been working on** this project.

Then as mentioned, this command will create a file called codusic.md which contains your popular track list. And link it to your readme.md file.

## Why?

Have you ever wondered, which tracks the developer of a project has been listening while coding it? Well, I did.

I was wondering if it is helping me to listen music while coding, and if it is, which genre is the best to listen while coding. My main goal is to luckily get the information of hundreds of project data and compare the genres with your coding quality. I don't know how to do that for now, but codusic is a starting point for gathering data.

[Top Tracks Listened While Coding This Project - Codusic](codusic.md)
