export const Editor = () => {
  return (
    <div className="grow">
      <div className="p-12">
        In XState beziehen sich parallele Zustände auf eine Möglichkeit,
        gleichzeitige oder parallele Verhaltensweisen in einer Zustandsmaschine
        zu modellieren. XState ist eine Bibliothek zur Verwaltung von Zuständen
        und Zustandsübergängen in JavaScript-Anwendungen. In XState kann eine
        Zustandsmaschine mehrere parallele Zustände haben, die gleichzeitig
        ausgeführt werden. Jeder parallele Zustand repräsentiert ein
        unabhängiges Verhalten oder einen Aspekt des Systems. Diese parallelen
        Zustände können ihre eigenen Zustände, Ereignisse und Übergänge haben,
        können aber unabhängig voneinander ausgeführt und Übergänge durchlaufen.
        Um parallele Zustände in XState zu definieren, kannst du die
        parallel-Eigenschaft innerhalb der states-Konfiguration eines
        Zustandsobjekts verwenden. Hier ist ein Beispiel, um das Konzept zu
        verdeutlichen: Im Zustand paying des Beispiels paymentMachine haben wir
        parallele Zustände definiert, indem wir die Eigenschaft type: 'parallel'
        verwendet haben. Innerhalb des Zustands paying haben wir zwei parallele
        Zustände: paymentMethod und orderProcessing. Diese Zustände können
        unabhängig voneinander innerhalb ihrer eigenen Zustandshierarchie
        wechseln. Die Verwendung paralleler Zustände ermöglicht es dir, komplexe
        Verhaltensweisen zu modellieren, bei denen mehrere Aspekte deines
        Systems unabhängig voneinander voranschreiten müssen. Jeder parallele
        Zustand kann seine eigenen Unterzustände, Übergänge und Aktionen haben,
        was es dir ermöglicht, das gleichzeitige Verhalten deiner Anwendung
        effektiver zu verwalten.
      </div>
    </div>
  );
};
