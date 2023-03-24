import {IBM_Plex_Sans_Condensed, IBM_Plex_Sans} from 'next/font/google'
import { Karla, Inconsolata } from 'next/font/google'
import { Cormorant, Proza_Libre } from 'next/font/google'

export const main_font = Inconsolata({
  subsets: ["latin"],
  weight: "400"
})

export const secondary_font = Karla({
  subsets: ["latin"],
  weight: "400"
})
