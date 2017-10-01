# Codusic

Generates a list of most listened-to tracks inside your project file by using your Lastfm data.

> PROTIP: To keep the spelling in mind **(code + music = codusic)**

## How does it work?

Lastfm is a platform that works by crawling what you listen to on your PC, phone etc. It is supported by popular listening platforms like Spotify. If you are listening on local, you can also have your Lastfm account hooked up to your favorite music player software.

Codusic checks your Lastfm data and generates a .md file in your project - (codusic.md) - and links that file to your README.md file. This way others can see what you listened to while creating your awesome project.

## Installing & Using

Install global module of codusic.

```
npm install -g codusic
```

Now you are good to go, see your options for codusic by;

```
codusic -h
```

Initilize your codusic with your Lastfm account.

```
codusic init
```

Follow the form and this will create a codusic.json file in your project folder (wherever you are initializing codusic). It will ask you for your **lastfm username** and **how long you have been working on** this project.

Then, as mentioned, this command will create a file called codusic.md which contains your popular track list, and link it to your readme.md file.

[](https://raw.githubusercontent.com/btk/codusic/master/screenshot.png)

## Why?

Have you ever wondered which tracks the developer of a project has been listening while coding it? Well, I did.

I was wondering if it would help me to listen to music while coding, and if it is, which genre is the best to listen to while coding. My main goal is to get the information from hundreds of project data and compare the genres with your coding quality. I don't know how to do that for now, but codusic is a starting point for gathering data.

[Top Tracks Listened While Coding This Project - Codusic](codusic.md)
