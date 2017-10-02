# Codusic

Generates a list of most listened to tracks inside your project file by using your LastFM data.

> PRO TIP: Keep spelling in mind **(code + music = codusic)**

## How does it work?

LastFM is a platform that works by crawling what you listen to on your pc, phone etc. It has support for popular listening platforms like Spotify. If you are listening locally, you can also have your lastFM account hooked to your favorite music player software.

Codusic checks your lastfm data and generates a markdown file in your project (`codusic.md`) and links that file to your README.md file. This way others can see what you listened while creating your awesome project.

## Installation & Use

Install global module of codusic:

```
npm install -g codusic
```

Now you are good to go, see your options for codusic:

```
codusic -h
```

Initilize your codusic with your Lastfm account:

```
codusic init
```

Follow the form, and a `codusic.md` file will be created in the folder you are initializing codusic in. It will ask for your **lastfm username** and **how long you have been working on** this project.

The created `codusic.md` file contains your popular track list, and will be linked to from your `readme.md` file.


## Why?

Have you ever wondered which tracks the developer of a project has been listening while coding it? Well, I did.

I was wondering if it would help me to listen to music while coding, and if it is, which genre is the best to listen to while coding. My main goal is to get data from hundreds of projects and correlate genres with code quality. I don't know how to do that for now, but codusic is a starting point for gathering data.

## Working Screenshot

![alt tag](https://github.com/btk/codusic/blob/master/screenshot.png)

[Top Tracks Listened While Coding This Project - Codusic](codusic.md)
