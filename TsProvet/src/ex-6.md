###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Båda används för att definiera egna type men det finns viktiga likheter och skillnader
Likheter först
Objektstrukturer:
Både type och interface kan användas för att definiera formen på ett objekt, exempelvis:
type PointType = {x: number; y: number};
interface PointInterface {x: number; y:number;}

Funktionssignaturer: Båda kan användas för att definiera funktionsignaturer, exempelvis:
type addFnType = (a: number, b: number) => number;
interface addFnInterface { (a: number, b: number): number;}

Generiska typer: båda stöder generiska typer:
type ContainerType<T> = { value: T};
interface ContainerInterface <T> {value: T;}


Skillnader
Union och intersection: type har inbyggt stöd för union och intersection medan interface inte har det:
type Combined = PointType & {z: number};

Typalias: type kan skap en alias för en annan typ, inlusive primitiva typer, unioner och tupler, vilket interface inte kan:
type age = number;
type coordinates = [number, number];


Uttökning och sammanslagning: interface kan lätt uttökas med extends och kan också sammanslås vilekt är en fördel om du behöver utöka en typ över tid: exempel:
interface ExtendedPoint extends PointInterface {z: number; }
inteerface PointInterface { w: number; } // mergar med den föregående PointInterface

Implementering: Klasser kan explicit implementera en interface med implements nyckelordet vilket hjlper till att säkreställa att klassen följer kontraktet:
class MyPoint implements Pointinterface {/*...*/}

Kompabilitet: interface är mer kompatibelt med JS och kan vara lättare att migrera om du redan har en befintlig JS kodbas

Literal type: type kan anvädndas för att definiera literal typer vilket interface inte kan
type Direction = "north" | "South" | "east" | "west";

Sammanfattningsvis använder man interface när man definierar kontrakt som klasser kan följa eller när ma n  vill att en typ ska uttökas över tid