### API para praticar os princípios do SOLID  
S - *single responsibility*: cada arquivo/classe deve ter uma única responsabilidade, realizar apenas uma tarefa.  
O - *open closed*: uma classe deve ser aberta para extensões mas não modificações, ou seja, quando formos estender uma classe, iremos      reaproveitar TODOS o funcionamento dela, sem reescrever nada.  
L - *Liskov substitution*: tudo que for externo da aplicação, como API e bancos de dados, devem ser abstraídos em classes dentro da nossa aplicação, sendo assim a classe de "cima" funcionará independente dessa.  
I - *interface segregation*: dividir interfaces em interfaces menores,   
D - *dependency inversion*: as classes não devem depender de implementações e sim de interfaces. Por exemplo, uma classe de upload de imagens não deve saber onde a imagem será armazenada, deve somente mostrar o fluxo para realizar essa tarefa.  
 ## Na prática o S, L e D são os mais importantes.