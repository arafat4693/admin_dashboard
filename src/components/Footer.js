import React from 'react';
import { HeartIcon } from '@heroicons/react/outline'

export default function Footer() {
  return (
  <footer className="flex justify-between items-center w-full flex-col sm:flex-row">
    <h2 className="text-2xl text-gray-500 font-normal normal-case text-center">COPYRIGHT © 2022 Arafat Islam, All rights Reserved</h2>
    <h3 className="flex items-center gap-3 text-xl text-gray-500 font-normal normal-case">Hand-crafted & Made with <HeartIcon className="w-9 h-9 text-red-500"/></h3>
  </footer>
)
}
