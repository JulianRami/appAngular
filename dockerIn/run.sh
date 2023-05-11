VARHOSTNAME=`hostname`

cp /usr/local/apache2/htdocs/index.html /program/indexori.html

while(true)

do
	cp /project/indexori.html /usr/local/apache2/htdocs/index.html
        DATE=`date`
 	DATE=$(TZ=America/Bogota LC_TIME=es_ES.UTF-8  date +'%A, %d de %B de %Y %H:%M:%S')
	sed -i 's/varhostname/'"$VARHOSTNAME"'/g' /usr/local/apache2/htdocs/index.html 
	sed -i 's/vardate/'"$DATE"'/g' /usr/local/apache2/htdocs/index.html

sleep 5

done

