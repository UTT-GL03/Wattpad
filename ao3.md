# AO3


## Scénario 1 : Lire une histoire mise en favorite
1. Le lecteur se connecte
2. Le lecteur va sur son profil
3. Le lecteur lit la nouvelle publication d’une histoire

|Scenario|Url                                                          |Nombre requêtes|Taille(kb)|Taille du dom|GES |Eau |ecoIndex|Note|
|--------|-------------------------------------------------------------|---------------|----------|-------------|----|----|--------|----|
|1.1     |[Page d'accueil](https://archiveofourown.org/)               |31             |320       |319          |1.44|2.16|78.01   |B   |
|1.2     |[Page de connexion](https://archiveofourown.org/users/login) |33             |799       |991          |1.95|2.92|52.61   |D   |
|1.3     |[Page d'un livre](https://archiveofourown.org/works/71541376)|31             |783       |296          |1.47|2.21|76.47   |B   |

## Scénario 2 : Chercher une histoire avec différents filtre
1. Le lecteur va sur la page d’accueil
2. Le lecteur tape sa recherche dans la barre
3. Le lecteur filtre sur sa recherche
4. Le lecteur scroll (changement de page de résultats sur AO3)
5. Le lecteur clique sur une histoire

|Date|Url                                                          |Nombre requÃªtes|Taille(kb)|Taille du dom|GES |Eau |ecoIndex|Note|
|----|-------------------------------------------------------------|----------------|----------|-------------|----|----|--------|----|
|2.1 |[Page d'accueil](https://archiveofourown.org/)               |33              |428       |612          |1.70|2.55|65.14   |C   |
|2.2 |[Page de recherche](https://archiveofourown.org/works/search?work_search%5Bquery%5D=kira)|32              |803       |1953         |2.14|3.21|43.04   |D   |
|2.3 |[Page de selection de filtres](https://archiveofourown.org/works/search?edit_search=true&work_search%5Bquery%5D=kira)|31              |713       |600          |1.71|2.57|64.39   |C   |
|2.3 |[Page de recherche après filtre](https://archiveofourown.org/works/search?work_search%5Bquery%5D=kira&work_search%5Btitle%5D=&work_search%5Bcreators%5D=&work_search%5Brevised_at%5D=&work_search%5Bcomplete%5D=&work_search%5Bcrossover%5D=&work_search%5Bsingle_chapter%5D=0&work_search%5Bword_count%5D=&work_search%5Blanguage_id%5D=en&work_search%5Bfandom_names%5D=%E3%82%B8%E3%83%A7%E3%82%B8%E3%83%A7%E3%81%AE%E5%A5%87%E5%A6%99%E3%81%AA%E5%86%92%E9%99%BA+%7C+JoJo+no+Kimyou+na+Bouken+%7C+JoJo%27s+Bizarre+Adventure&work_search%5Brating_ids%5D=&work_search%5Barchive_warning_ids%5D%5B%5D=14&work_search%5Bcategory_ids%5D%5B%5D=21&work_search%5Bcharacter_names%5D=&work_search%5Brelationship_names%5D=&work_search%5Bfreeform_names%5D=&work_search%5Bhits%5D=&work_search%5Bkudos_count%5D=&work_search%5Bcomments_count%5D=&work_search%5Bbookmarks_count%5D=&work_search%5Bsort_column%5D=_score&work_search%5Bsort_direction%5D=desc&commit=Search)|32              |798       |1933         |2.14|3.21|43.14   |D   |
|2.4 |[2e Page de resultats de recherche](https://archiveofourown.org/works/search?commit=Search&page=2&work_search%5Barchive_warning_ids%5D%5B%5D=14&work_search%5Bbookmarks_count%5D=&work_search%5Bcategory_ids%5D%5B%5D=21&work_search%5Bcharacter_names%5D=&work_search%5Bcomments_count%5D=&work_search%5Bcomplete%5D=&work_search%5Bcreators%5D=&work_search%5Bcrossover%5D=&work_search%5Bfandom_names%5D=%E3%82%B8%E3%83%A7%E3%82%B8%E3%83%A7%E3%81%AE%E5%A5%87%E5%A6%99%E3%81%AA%E5%86%92%E9%99%BA+%7C+JoJo+no+Kimyou+na+Bouken+%7C+JoJo%27s+Bizarre+Adventure&work_search%5Bfreeform_names%5D=&work_search%5Bhits%5D=&work_search%5Bkudos_count%5D=&work_search%5Blanguage_id%5D=en&work_search%5Bquery%5D=kira&work_search%5Brating_ids%5D=&work_search%5Brelationship_names%5D=&work_search%5Brevised_at%5D=&work_search%5Bsingle_chapter%5D=0&work_search%5Bsort_column%5D=_score&work_search%5Bsort_direction%5D=desc&work_search%5Btitle%5D=&work_search%5Bword_count%5D=)|32              |801       |1769         |2.12|3.18|43.84   |D   |
|2.5 |[Page d'un livre](https://archiveofourown.org/works/11556096)|32              |797       |617          |1.74|2.61|63.14   |C   |

## Scénario 3 : Écrire une histoire
1. L’auteur se connecte
2. L’auteur va sur la page d’écriture
3. L’auteur remplit son chapitre
4. L’auteur publie son histoire

|Scénario|Url                                                          |Nombre requÃªtes|Taille(kb)|Taille du dom|GES |Eau |ecoIndex|Note|
|--------|-------------------------------------------------------------|----------------|----------|-------------|----|----|--------|----|
|3.1     |[Page d'accueil](https://archiveofourown.org/)               |30              |318       |319          |1.44|2.15|78.21   |B   |
|3.1     |[Page de connexion](https://archiveofourown.org/users/login) |32              |738       |944          |1.92|2.88|54.07   |D   |
|3.2     |[Page de création de chapitre](https://archiveofourown.org/works/new)|31              |860       |1034         |1.96|2.95|51.80   |D   |
|3.3     |[Page de création de chapitre](https://archiveofourown.org/works/new)|43              |877       |1042         |2.02|3.03|49.09   |D   |
|3.4     |[Page du chapitre publié](https://archiveofourown.org/works) |30              |716       |414          |1.56|2.34|72.07   |B   |

## Scénario 4 : Écriture d’un commentaire
1. L’auteur se connecte
2. L’auteur consulte une de ses histoire favorite
3. L’auteur laisse un j’aime
4. L’auteur publie un commentaire

|Date|Url                                                          |Nombre requÃªtes|Taille(kb)|Taille du dom|GES |Eau |ecoIndex|Note|
|----|-------------------------------------------------------------|----------------|----------|-------------|----|----|--------|----|
|4.1 |[Page d'accueil](https://archiveofourown.org/)               |30              |320       |319          |1.44|2.15|78.20   |B   |
|4.1 |[Page de connexion](https://archiveofourown.org/users/login) |32              |793       |982          |1.94|2.91|53.00   |D   |
|4.2 |[Page d'un livre](https://archiveofourown.org/works/71541376)|30              |711       |446          |1.59|2.38|70.74   |B   |
|4.3 |[Page d'un livre (après avoir cliqué sur j'aime)](https://archiveofourown.org/works/71541376)|33              |789       |449          |1.61|2.41|69.63   |C   |
|4.4 |[Page des commentaires d'un livre](https://archiveofourown.org/works/71541376/comments)|36              |805       |486          |1.65|2.48|67.39   |C   |


