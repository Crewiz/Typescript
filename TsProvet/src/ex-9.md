### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?


Generics är ett sätt att skapa komponenter som kan arbeta med olika datatyper, utan att förlora typinformationen. Med andra ord tillåter generics en att skriva kod som är både återanvändbar och typsäker. I stället för att hårdkoda en specifik typ i en fuynktion, klass eller interface, kan man använda en placeholder (Oftast T) seom sedan kan ersättas med en konkret typ vid användning.

Exempel utan generics:
function identity(arg: any): any {
    return arg;
}
I detta fall vet vi inte mycket om args type och man förlorar typinformationen när vi använder funktionen.

Exempel MED generics:
function idnetity<T>(arg: T) T {
    return arg;
}
Här har vi en "generic" funktion. T är är en typvariabel och den används som en placeholder för den typ som användaren kommer att ange

När man bör använda generics:

Typsäkerhet: Generics hjälper en behålla typinformation genom hela flödet av programmet.
Återanvändbarhet: Istället för att skriva nya funktioner för varje specifik typ  kan du skriva en generell implementation som kan användas för olika typer.
Bibliotek och Datastrukturer: Om du skapar bibliotek eller datastrukture kan generics hjälpa dig skriva kod som kan användas på ett flexibel sätt utan att förlora typsäkerheten
Arbeta med flera typer samtidigt: Generics tillåter dig att arbeta med flera typer samtidigt. Till exempel, i en Map<K, V> kan K och V vara olika typer.
Exempel med en Array:
class GenericArray<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  getItems(): T[] {
    return this.items;
  }
}

const numArray = new GenericArray<number>();
numArray.add(1);
numArray.add(2);

const strArray = new GenericArray<string>();
strArray.add("hello");
strArray.add("world");


Här har vi en generisk klass GenericArray<T> som kan arbeta med antingen nummer eller strängar, beroende på hur vi instansierar den
