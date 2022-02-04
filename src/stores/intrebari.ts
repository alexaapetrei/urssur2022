import { writable , get, readable } from "svelte/store";
import { browser } from "$app/env";

import a from '../jsons/a.json';
import b from '../jsons/b.json';
import c from '../jsons/c.json';
import d from '../jsons/d.json';
import e from '../jsons/e.json';
import r from '../jsons/r.json';


export var intrebari = writable(b);

export const categoria = writable("b")

  

export const change = function(v) {
 
switch (v) {
        case 'a':
          intrebari.set(a);
          categoria.set('a')
        break;
        case 'b':
            intrebari.set(b);
            categoria.set('b')
        break;
        case 'c':
            intrebari.set(c);
            categoria.set('c')
        break;
        case 'd':
            intrebari.set(d);
            categoria.set('d')
        break;
         case 'e':
            intrebari.set(e);
            categoria.set('e')
         break;
         case 'r':
            intrebari.set(r);
            categoria.set('r')
        break;
        }
}

if(browser) {
  categoria.set(localStorage.getItem("categoria"))
  change(localStorage.getItem("categoria"))
  categoria.subscribe((val) => localStorage.categoria = val);
}




