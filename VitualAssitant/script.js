



const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
const btn = document.querySelector("#listen-btn");

btn.addEventListener("click", function () {
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function handleCommand(command) {
        const commandLower = command.toLowerCase();

        if (commandLower.includes("open youtube")) {
            speak("Opening YouTube...");
            window.open("https://www.youtube.com/");
        } else if (commandLower.includes("open google")) {
            speak("Opening Google...");
            window.open("https://www.google.com", "_blank");
        } else if (commandLower.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com", "_blank");
        } else if (commandLower.includes("open instagram")) {
            speak("Opening Instagram...");
            window.open("https://www.instagram.com", "_blank");
        } else if (commandLower.includes("open whatsapp")) {
            speak("Opening WhatsApp...");
            window.open("https://www.whatsapp.com", "_blank");
        } else if (commandLower.includes("open twitter")) {
            speak("Opening Twitter...");
            window.open("https://www.twitter.com", "_blank");
        } else if (commandLower.includes("hello")) {
            const currentHour = new Date().getHours();
            let greeting = '';
            if (currentHour < 12) {
                greeting = "Good morning!";
            } else if (currentHour < 18) {
                greeting = "Good afternoon!";
            } else {
                greeting = "Good evening!";
            }
            speak(greeting + " How can I assist you today?");
        } else if (commandLower.includes("what time is it")) {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            speak(`The current time is ${timeString}.`);
        } else if (commandLower.includes("who made you")) {
            speak("I was made by Pratik sir.");
        } else if (commandLower.includes("what is your name")) {
            speak("I am Jarvis, your virtual assistant.");
        } else if (commandLower.includes("good morning")) {
            speak("Good morning! Hope you have a great day ahead.");
        } else if (commandLower.includes("good night")) {
            speak("Good night! Sleep well.");
        } else if (commandLower.includes("tell me a joke")) {
            const jokes = [
                "Why don't skeletons fight each other? They don't have the guts!",
                "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                "Why don't programmers like nature? It has too many bugs."
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            speak(randomJoke);
        } else if (commandLower.includes("what is the weather")) {
            speak("I can't fetch weather right now, but you can check it on a weather app or website!");
        } else if (commandLower.includes("play music")) {
            speak("Playing your favorite music...");
            window.open("https://www.youtube.com/results?search_query=music");
        } else if (commandLower.includes("search for")) {
            const searchTerm = commandLower.replace("search for", "").trim();
            speak(`Searching for ${searchTerm} on Google.`);
            window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`);
        } else if (commandLower.includes("set an alarm")) {
            speak("I cannot set alarms at the moment, but you can set one through your phone.");
        } else if (commandLower.includes("open calculator")) {
            speak("Opening Calculator...");
            window.open("https://www.google.com/search?q=calculator");
        } else if (commandLower.includes("open notepad")) {
            speak("I cannot open Notepad, but you can open it on your computer.");
        } else if (commandLower.includes("convert currency")) {
            speak("I can't convert currency right now, but you can use an online converter.");
        } else if (commandLower.includes("how are you")) {
            speak("I'm doing great, thank you for asking!");
        } else if (commandLower.includes("tell me the news")) {
            speak("I can't fetch the news right now, but you can check the latest news online.");
        } else if (commandLower.includes("what's your favorite color")) {
            speak("I like all colors equally, but I guess blue is nice!");
        } else if (commandLower.includes("how tall are you")) {
            speak("I don't have a physical form, so I don't have height.");
        } else if (commandLower.includes("who are you")) {
            speak("I am Jarvis, your virtual assistant.");
        }
        else if (commandLower.includes("tell me about my friend raj")) {
            speak("Raj Jarvis is a friend so true,");
            speak("With a heart of gold, and kindness through and through.");
            speak("He's friendly, caring, and always so bright,");
            speak("Spreading joy and love, day and night.");
            speak("And there's Supriya, his lovely queen,");
            speak("Together they make the perfect team.");
            speak("In every moment, they share their dreams,");
            speak("A love story that shines, like sunlight beams.");
        }
        
        

        else if (commandLower.includes("open gmail")) {
            speak("Opening Gmail...");
            window.open("https://mail.google.com");
        } else if (commandLower.includes("play movie")) {
            speak("You can search for movies on YouTube or streaming services.");
            window.open("https://www.youtube.com/results?search_query=movie");
        } else if (commandLower.includes("what is the date today")) {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            speak(`Today's date is ${day}/${month}/${year}.`);
        } else if (commandLower.includes("open microsoft word")) {
            speak("Opening Microsoft Word...");
            window.open("https://www.office.com/launch/word");
        } else if (commandLower.includes("open excel")) {
            speak("Opening Microsoft Excel...");
            window.open("https://www.office.com/launch/excel");
        } else if (commandLower.includes("what is 2 plus 2")) {
            speak("2 plus 2 is 4.");
        } else if (commandLower.includes("do you like music")) {
            speak("I don't have personal preferences, but I can play music for you!");
        } else if (commandLower.includes("tell me something interesting")) {
            speak("Did you know? The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.");
        }
        else if (commandLower.includes("open weather app")) {
            speak("Let me search the weather for you on Google...");
            window.open(`https://www.google.com/search?q=weather`);
        }

        else if (commandLower.includes("search youtube for")) {
            const searchTerm = commandLower.replace("search youtube for", "").trim();
            speak(`Searching YouTube for ${searchTerm}`);
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`);
        } else if (commandLower.includes("how many days until")) {
            const date = commandLower.replace("how many days until", "").trim();
            const targetDate = new Date(date);
            const currentDate = new Date();
            const timeDiff = targetDate - currentDate;
            const days = Math.floor(timeDiff / (1000 * 3600 * 24));
            speak(`${days} days until ${date}.`);
        }
    }

    speak("jarvis active..,welcome to jarvis world,Hello sir! How can I assist you today?")



    recognition.start();
    recognition.onresult = (event) => {
        console.log(event);
        const command = event.results[0][0].transcript.toLowerCase();
        handleCommand(command);
    };

    recognition.onend = () => {
        recognition.start();
    };
});
