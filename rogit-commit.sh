#!/bin/bash
echo Harás un commit de todos los archivos
read -p 'Mensaje significativo: ' msg
echo  Harás commit con el mensaje $msg
read -p 'Le damos? s/N ' -n 1 -r
if [[ $REPLY =~ ^[Ss]$ ]]
then
    echo
    echo Sobres! 🔥🔥🔥
    git add -A
    git commit -m "$msg"
    echo Listo! Eres el mejor 🤓
else
    echo No pasa nada, ahorita lo corriges 😊
fi

