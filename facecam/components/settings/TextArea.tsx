"use client";
import { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

export function MessageArea() {
    const placeholders = [
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Do you have a map? I keep getting lost in your eyes.",
        "Are you a Wi-Fi signal? Because I'm feeling a connection.",
        "If beauty were time, you'd be an eternity.",
        "Are you a camera? Every time I look at you, I smile.",
        "Excuse me, but I think the stars tonight are outshone by your smile.",
        "Is your name Google? Because you have everything I've been searching for.",
        "If you were a vegetable, you'd be a cute-cumber!",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Can I follow you? Because my mom told me to follow my dreams.",
        "Are you a parking ticket? Because you've got 'FINE' written all over you.",
        "Do you believe in love at first sight, or should I walk by again?",
        "Are you a time traveler? Because I can't imagine my future without you.",
        "Are you made of copper and tellurium? Because you're Cu-Te.",
        "Excuse me, but I think you dropped something: MY JAW!",
        "Do you have a sunburn, or are you always this hot?",
        "Is your name Wi-fi? Because I'm really feeling a connection.",
        "Are you a loan? Because you have my interest.",
        "Excuse me, but I think you dropped something: MY JAW!",
        "Is your name Ariel? Because we mermaid for each other.",
        "Do you have a pencil? Because I want to erase your past and write our future.",
        "Are you a cat? Because you're purr-fect.",
        "Can I take a picture of you, so I can show Santa exactly what I want for Christmas?",
        "Excuse me, do you have a name, or can I call you mine?",
        "Are you a time traveler? Because I can't imagine my future without you.",
        "Is your name Google? Because you've got everything I've been searching for.",
        "Do you have a name, or can I call you mine?",
        "Are you a campfire? Because you're hot and I want s'more.",
        "Is your name Google? Because you've got everything I've been searching for.",
        "If you were a vegetable, you'd be a cute-cumber!",
        "Excuse me, but I think you dropped something: MY JAW!",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "If you were words on a page, you'd be fine print.",
        "Are you a parking ticket? Because you've got 'FINE' written all over you.",
        "Do you have a sunburn, or are you always this hot?",
        "Are you a Wi-fi signal? Because I'm feeling a connection.",
        "If beauty were time, you'd be an eternity.",
        "Excuse me, but I think you dropped something: MY JAW!",
        "Is your name Ariel? Because we mermaid for each other.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Can I follow you? Because my mom told me to follow my dreams.",
        "Are you made of copper and tellurium? Because you're Cu-Te.",
        "Excuse me, do you have a name, or can I call you mine?",
        "Is your name Google? Because you have everything I've been searching for.",
        "Do you have a map? I keep getting lost in your eyes.",
        "If you were words on a page, you'd be fine print.",
        "Are you a time traveler? Because I can't imagine my future without you.",
        "Is your name Wi-fi? Because I'm really feeling a connection.",
        "Can I take a picture of you, so I can show Santa exactly what I want for Christmas?",
        "Do you have a pencil? Because I want to erase your past and write our future."
      ];
      

  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the placeholder index, and loop back to the beginning if it exceeds the array length
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 69000); // seconds interval
    return () => clearInterval(intervalId);
  },); // Empty dependency array ensures that the effect runs only once on mount
  const customText = "Some pickup lines for your stranger buddy 👻:"
  const lastText = "Hope you are enjoying FaceCam 👋."
  const currentMessage = `${customText} ${placeholders[currentPlaceholderIndex]} ${lastText}`;
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder={currentMessage} />
    </div>
  );
}
