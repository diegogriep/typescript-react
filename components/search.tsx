'use client'

import { Command, CommandInput, CommandList, CommandEmpty, CommandLoading,
  CommandGroup, CommandItem } from "@/components/ui/command";

import { Skeleton } from "@/components/ui/skeleton"
import { getData } from "@/utils/getData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const options = {
    enabled: inputValue.length > 2,
    staleTime: 10 * 1000,
  }

  const { data, isLoading } = useQuery({
    queryKey: ['words', inputValue],
    queryFn: () => getData(inputValue),
    ...options
  });

  return (
    <main className="flex min-h-screen items-center justify-center px-16">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Start typing..." autoFocus value={inputValue}
          onValueChange={setInputValue} />
        <CommandList>
          {data?.length === 0 && (<CommandEmpty>No results found.</CommandEmpty>)}
          {isLoading && (
              <CommandLoading className="p-0">
                <Skeleton className="p-0 text-sm py-1.5 px-2 rounded-sm h-8 w-full" />
              </CommandLoading>
            )}
          <CommandGroup heading="Suggestions">

            {data?.map((word, index) =>
              <CommandItem key={index} value={word.word}><span>{word.word}</span></CommandItem>)}
          </CommandGroup>

        </CommandList>
      </Command>
    </main>
  );
}