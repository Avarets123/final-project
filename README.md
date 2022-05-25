# Дипломный проект 


### Детали проекта
1. В папке components находятся все компоненты, используемые в проекте, в качестве компонентов вынесены только те части страницы, которые используется неоднократно.
    * В папке Catalogs находятся два компонента, из-за взаимосвязи между ними объединил их в одну папку
    * Catalogs - компонент для фильтра товаров по заданным категориям.
    * Items - сами товары, которые отображаются на странице.
    * В папке Preloader находится компонент, который показывает спиннер для разных страниц.
    * В папке TopSales расположен компонент, отображающий хиты продаж на странице.
    * В папке Footer - расположена нижняя часть страницы.
    * В папке Header - расположена шапка страницы.      
2. В папке hooks находятся самодельные хуки.  
3. В папке pages находятся страницы приложения, здесь также следует отметить, что внутри страниц и некоторых компонентов расположены функции, используемые как компоненты, которые предназначены для простоты понимания происходимого в компоненте.
    * Не буду перечислять содержимое данной папки, так как все интуитивно понимается.
4. Папка utils содержить один файл index.js, в котором собраны вспомогательные функции
5. В Папка reducer создается глобальное состояние и редьюсер для взаимодействия с ним 
