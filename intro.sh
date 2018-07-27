#!/bin/bash

read -p 'Rama: ' rama
read -p 'Mensaje significativo: ' msg
echo  Harás push a $rama con el mensaje $msg
read -p 'Le damos? s/N ' -n 1 -r
if [[ $REPLY =~ ^[Ss]$ ]]
then
    echo
    echo Sobres! 🔥🔥🔥
    git add -A
    git commit -m "_$msg"
else
    echo No pasa nada, ahorita lo corriges 😊
fi

