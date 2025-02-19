"use client";

import { Button, Textarea } from "@heroui/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react"

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
   input: string
   handleInputChange: HandleInputChange
   handleSubmit: HandleSubmit
   setInput: SetInput
}

export const ChatInput = ( {handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900">
          <div className="mx-2 flex flex-col gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex flex-1 flex-col h-full">
              <div className="flex flex-col w-full p-4">
                {/* Added flex-grow here */}
                <form onSubmit={handleSubmit} className="relative flex flex-col items-end">
                  <Textarea
                    minRows={4}
                    autoFocus
                    onChange={handleInputChange}
                    value = {input}
                    onKeyDown={(e) => {
                        if(e.key === "Enter" && !e.shiftKey){
                            e.preventDefault()
                            handleSubmit()
                            setInput("")
                        }
                    }}
                    placeholder="Enter your question..."
                    className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
                  />
                  <Button
                    size="sm"
                    type="submit"
                    className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};
