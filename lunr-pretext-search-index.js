var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "act_Preface",
  "level": "1",
  "url": "act_Preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface   A Free and Open-Source Topology Text  Mathematics is for everyone whether as a gateway to other fields or as background for higher level mathematics. I made this textbook available to everyone for free download for their own non-commercial use. It could be especially useful for instructors who are looking for an inquiry-based textbook, as a supplemental resource to accompany their course, or for someone interested in learning some topology on their own. If an instructor would like to make changes to any of the files to better suit their students' needs, source files for the text are available by making a request to the author.  This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. The graphic   shows that the work is licensed with the Creative Commons, that the work may be used for free by any party so long as attribution is given to the author(s), that the work and its derivatives are used in the spirit of share and share alike, and that no party may sell this work or any of its derivatives for profit. Full details may be found by visiting the Creative Commons website. or sending a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.    Goals  Over many years I have taught topology I developed pre- and in-class activities that I used to supplement the texts I had adopted. Eventually I had enough material to eliminate the reliance on outside texts and could rely on the activities. This book is built on those activities and is intended as a one semester introduction to point-set topology. The emphasis for this book is to have students be active learners and to help develop their intuition through working activities and examples. Although it is difficult to capture the essence of active learning in a textbook, this book is an attempt to do just that.  The goals for these materials are several.   To carefully introduce the ideas behind the definitions and theorems to help students develop intuition and understand the logic behind them.    To help students understand that mathematics is not done as it is often presented. I expect students to experiment through examples, make conjectures, and then refine or prove their conjectures. I believe it is important for students to learn that definitions and theorems don't pop up completely formed in the minds of most mathematicians but are the result of much thought and work.    To help students develop their communication skills in mathematics. Students are expected to read and complete activities before class and come prepared with questions. Students regularly work in groups and present their work in class. Outside of class students work pre-class activities that are designed to help review previous material and to prepare them for the discussion of new material. In addition, students also individually write solutions to exercises on which they receive significant feedback. Communication skills are essential in any discipline and a heavy focus is placed on their development.       Layout  Each section of the book contains preview activities, in-class activities, and exercises. The various types of activities serve different purposes.   Preview activities are designed for students to complete before class to motivate the upcoming topic and prepare them with the background and information they need for the class activities and discussion.    The in-class activities engage students in common intellectual experiences. These activities are used to provide motivation for the material, opportunities for students to prove substantial course material on their own, or examples to help reinforce the meanings of definitions or theorems and their proofs. The ultimate goal is to help students develop their intuition for and understanding of abstract concepts. Students often complete these in-class activities, then present their results to the entire class.     Each section contains a collection of exercises. The exercises occur at a variety of levels of difficulty and most force students to extend their knowledge in different ways. While there are some standard, classic problems that are included in the exercises, many problems are open ended and expect a student to develop and then verify conjectures.    Organization  This text begins by formally introducing sets and functions. Although these topics are familiar to students, it is my experience that the level of understanding of sets and functions for most students is not yet sufficiently deep enough to ensure success with functions throughout the course. focuses on metric spaces. It is my belief and my experience that students better understand the abstract concepts of neighborhoods, open sets, continuity, etc., if they are first experienced in a more familiar, concrete context like metric spaces. Metric spaces are easier for students to grasp than general topological spaces as they provide a notion of distance that is comforting to students. Metric spaces also allow one to introduce and motivate important topological concepts in a more familiar context. For example, by first encountering continuity of functions in a metric space setting, and revisiting the idea from different perspectives, the definition of continuity in the more abstract setting of topological spaces seems more accessible and natural. This perspective was also noted by Felix Hausdorff, who is considered as one of the founders of modern topology. His text Grundzüge der Mengenlehre (Fundamentals of Set Theory) (Felix Hausdorff, Leipzig, Von Veit, 1914. Translated to English as Set Theory by John R. Aumann et al, New York, Chelsea PublishingCompany, 1957) provided one of the first systematic treatments of topological spaces. As Hausdorff writes (p. 210) concerning the introduction of the concepts of topology following topics of basic set theory,   A quite generally worded theory of this nature would of course cause considerable complications, and deliver few positive results. But among the special examples that occupy a heightened interest belongs, apart from the theory of a [totally] ordered sets, especially the theory of point-sets in space, in fact here the foundational relationship is again a function of pairs of elements, namely the distance between two points: a function which however now is capable of infinitely many values.     To the Instructor  While this text is intended as a one semester introduction to point-set topology, there is more material in the text than my students have been able to comfortably digest in a single semester. With that in mind, some care should be taken to ensure that what you feel are the most important topics are ones that are discussed. As mentioned earlier, I think students really benefit from a thorough review and discussion of sets and functions in the first two sections. From there, the sections build on each other. However, one can omit on Applications of Metric Spaces without loss of continuity. My goal for a single semester course is to be sure that we can investigate compactness and connectedness. With this in mind, it is possible to omit on quotient spaces if time is tight.    Acknowledgments  The Grand Valley Steve University libraries provided a grant to support my colleagues, John Golden and Clark Wells, to review a draft version of this text. Their thorough reading and comments on the draft have made for a much better book. I am also indebted to my students who have all been test subjects for earlier versions of this material. Without their hard work and suggestions, this book would not exist.    To the Student  I have endeavored to keep the prerequisite material to a minimum for this text. The first two sections discuss sets and functions. Most of this material should be review for the reader, but the importance of these ideas in the subsequent sections makes it a good idea to spend time on these sections. That being said, it will be very helpful for the reader to have some background in reading and writing mathematical proofs.  The objectives of this book and its inquiry-based format place the responsibility of learning the material where it belongs on your shoulders. It is imperative that you engage in the material by completing the preview activities and the in-class activities in order to develop your intuition and understanding of the material. If you do this, and ask questions when you have them, your probability of success will be greatly enhanced. Good luck!   "
},
{
  "id": "sec_sets_intro",
  "level": "1",
  "url": "sec_sets_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  At its most basic level topology deals with sets and how we can deform sets into other sets. So to start our study of topology, we begin with sets. Much of this material should be familiar, but some might be new. The first issue for us to settle on is as precise a definition of set as possible.    Suppose we try to define a set to be a collection of elements. So, by definition, the elements are the objects contained in the set. We use the symbol to denote that an object is an element of a set. So means an object is not in the set if is an object in a set we write , and if is not an object in a set we write . We write sets using set brackets. For example, the set is the set whose elements are the symbols , , and . We can also include in the set notation conditions on elements of the set. For example, is the set of positive real numbers. We typically use capital letters to denote sets. Some familiar examples of sets are , the set of real numbers; , the set of rational numbers; and , the set of integers. Sets can also contain sets as elements. For example, the power set of a set is the set of subsets of . So the power set of is the set . (We will define subsets and the empty set later in this activity).    Consider the following set  , which is a collection of objects: . That is, is the collection of sets that do not have themselves as elements. Given any object , either or .   Is an element of ? Explain.   Is it the case that ? Explain.   Based on your responses to parts (a) and (b), explain why our current concept of a set as a collection of elements is not a good one.    Assume that we have a working definition of a set. In this part of the activity we define a subset of a set. The notation we will use is if is a subset of that is not equal to , and if is a subset of that could be the entire set . We will also say that is contained in if is a subset of , and call the relation (or ) a containment .   How should we define a subset of a set? Give a specific example of a set and two examples of subsets of that set.   If is a set, is a subset of ? Explain.   What is the empty set ? If is a set, is a subset of ? explain.    "
},
{
  "id": "pa_sets",
  "level": "2",
  "url": "sec_sets_intro.html#pa_sets",
  "type": "Preview Activity",
  "number": "1.1",
  "title": "",
  "body": "  Suppose we try to define a set to be a collection of elements. So, by definition, the elements are the objects contained in the set. We use the symbol to denote that an object is an element of a set. So means an object is not in the set if is an object in a set we write , and if is not an object in a set we write . We write sets using set brackets. For example, the set is the set whose elements are the symbols , , and . We can also include in the set notation conditions on elements of the set. For example, is the set of positive real numbers. We typically use capital letters to denote sets. Some familiar examples of sets are , the set of real numbers; , the set of rational numbers; and , the set of integers. Sets can also contain sets as elements. For example, the power set of a set is the set of subsets of . So the power set of is the set . (We will define subsets and the empty set later in this activity).    Consider the following set  , which is a collection of objects: . That is, is the collection of sets that do not have themselves as elements. Given any object , either or .   Is an element of ? Explain.   Is it the case that ? Explain.   Based on your responses to parts (a) and (b), explain why our current concept of a set as a collection of elements is not a good one.    Assume that we have a working definition of a set. In this part of the activity we define a subset of a set. The notation we will use is if is a subset of that is not equal to , and if is a subset of that could be the entire set . We will also say that is contained in if is a subset of , and call the relation (or ) a containment .   How should we define a subset of a set? Give a specific example of a set and two examples of subsets of that set.   If is a set, is a subset of ? Explain.   What is the empty set ? If is a set, is a subset of ? explain.   "
},
{
  "id": "sec_basic_top",
  "level": "1",
  "url": "sec_basic_top.html",
  "type": "Section",
  "number": "",
  "title": "The Basic Idea of Topology",
  "body": " The Basic Idea of Topology  If you like geometry, you will probably like topology. Geometry is the study of objects with certain attributes (e.g., shape and size), while topology is more general than geometry. In topology, we aren't concerned about the attributes (shape and size) of an object, only about those characteristics that don't change when we transform the object in different ways (any way that doesn't involve tearing or poking holes the object). There are lots of really interesting theorems in topology for example, the Hairy Ball Theorem which states that if you have a ball with hair all over it (think of a tribble from Star Trek if that isn't too old of a reference), it is impossible to comb the hairs continuously and have all the hairs lay flat. Some hair must be sticking straight up!    Take a pipe cleaner, a rubber band, or a piece of string and make a square from it. You are allowed to change the square by moving parts of the square without breaking it or lifting it off the surface it is on. To which of the following shapes can you transform your square? Explain.   a circle   the letter S    a five point star   a five-pointed star    the letter D     Now take some play-doh (if you don't have any play-doh, just use your imagination). Use the play-doh (or your imagination) to determine which of the following shape can be transformed into others without breaking or making holes.   a filled square   a doughnut   a bowl   a coffee mug with handle    This idea of transforming one set into another as we explored in is formally done with functions. As we progress through this subject, we will need to have more rigorous definitions of functions and sets. We begin with sets and discuss functions in .  "
},
{
  "id": "act_rubber_sheet",
  "level": "2",
  "url": "sec_basic_top.html#act_rubber_sheet",
  "type": "Activity",
  "number": "1.2",
  "title": "",
  "body": "  Take a pipe cleaner, a rubber band, or a piece of string and make a square from it. You are allowed to change the square by moving parts of the square without breaking it or lifting it off the surface it is on. To which of the following shapes can you transform your square? Explain.   a circle   the letter S    a five point star   a five-pointed star    the letter D     Now take some play-doh (if you don't have any play-doh, just use your imagination). Use the play-doh (or your imagination) to determine which of the following shape can be transformed into others without breaking or making holes.   a filled square   a doughnut   a bowl   a coffee mug with handle   "
},
{
  "id": "sec_intervals",
  "level": "1",
  "url": "sec_intervals.html",
  "type": "Section",
  "number": "",
  "title": "Intervals",
  "body": " Intervals  We will begin with one of the most basic type of set we will encounter intervals. The open intervals will be important as they will form a basis for the standard topology on . We are likely familiar with intervals from algebra and calculus, sets like , . To really understand intervals, we will need a rigorous definition.   interval   A subset of is an interval if for all , , and in (allowing for or to be ) with , if and are in , then is in .    With this definition, the set of all real numbers satisfying is an interval that we denote by (it is important to understand the context we also use the notation to denote an ordered pair). The general notation we use for intervals is the following:    ( or could be )     ( could be )     ( could be )     .     In this notation, . Intervals of the form are called open intervals, intervals of the form are called closed intervals, and intervals of the form or are half-open (or half-closed ) intervals. The reason for this terminology should become more clear as we introduce open and closed sets later.  Note that nothing in the definition indicates that we must have in the interval notation. This implies that is an interval. Since there are no real numbers larger than and less than , is an interval. We could also have an interval of the form where is any real number. This means that , and any single point set is an interval. The intervals and for any real number are called degenerate intervals.  One last note about intervals. Some require that be less than in the definition of an interval, with the result that there are no degenerate intervals. This is a matter of debate that we won't get into. In almost all of our work, we will consider only non-degenerate intervals so this won't be an issue for us.  "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "sec_intervals.html#definition-1",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": " interval   A subset of is an interval if for all , , and in (allowing for or to be ) with , if and are in , then is in .   "
},
{
  "id": "p-54",
  "level": "2",
  "url": "sec_intervals.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open closed half-open half-closed "
},
{
  "id": "p-55",
  "level": "2",
  "url": "sec_intervals.html#p-55",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degenerate "
},
{
  "id": "sec_union_int_comp",
  "level": "1",
  "url": "sec_union_int_comp.html",
  "type": "Section",
  "number": "",
  "title": "Unions, Intersections, and Complements of Sets",
  "body": " Unions, Intersections, and Complements of Sets  In mathematics, the collection of points that make up a string or a blob of play-doh as in is represented as a set. Topology is then the study of these sets and what properties of the sets don't change when transformations are applied to the sets. To study topology we will need a solid understanding of sets and different operations on sets.   set What we saw in is what is called a paradox . Our original attempt to define a set led to an impossible situation since both and lead to contradictions. This paradox is called Russell's paradox after Bertrand Russell, although it was apparently known before Russell. The moral of the story is that we need to be careful when making definitions. A set might seem like a simple object, and in our experi≈ence usually is, but formally defining a set can be problematic. As a result, we won't state a formal definition, but rather take a set to be a collection of objects that doesn't lead to a paradox. The objects are called the elements of the set. (In axiomatic set theory, a set is taken to be an undefined primitive much as a point is undefined in Euclidean geometry.)  In order to effectively work with sets, we need to have an understanding what it means for two sets to be equal.    What should it mean for two sets to be equal? If and are sets, how do we prove that ? (This is question that requires discussion, which is different than a question that only asks for a computation or an example. Activities throughout this text will ask both types of questions.)    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.    Once we have the notion of a set, we can build new sets from existing ones. For example, we define the union, intersection, set difference, and complement of a set as follows.   set union  The union of sets and is the set defined as .    The intersection  set intersection of sets and is the set defined as .    Let and be sets. The set difference  set difference  is the set .    Let be a subset of a set . The complement  set complement of in is the set . The complement of a set in a set is also denoted by , (if the set is understood), , or even .     We can visualize these sets using Venn diagrams. A Venn diagram is a depiction of sets using geometric figures. For example, if is a set containing all other sets of interest (we call the universal set), we can represent as a large container (say a rectangle) with subsets and as smaller containers (say circles), and shade the elements in a given set. The Venn diagrams in depict the sets , , , , , and .   Venn diagrams                         As we have discussed, to prove that two sets and are equal we prove that each is a subset of the other. The next example provides another illustration of the idea.    Let , , and be sets. We will prove that .  To prove this set equality we must prove that and . We start with .  To prove that , we need to demonstrate that every element in is also in . To do this, we select an arbitrary element in and show that this element is in . Let . Then and . The fact that implies that but . Therefore, and , but . This implies that and , but and . So and , but . We conclude that . This proves that .  For the reverse containment, we let . So but . Since , we know that and . The fact that means that . So , , and . Thus, and . We conclude that , which shows that . The two containments, and demonstrate that .    We will use the ideas in and to prove set equalities throughout this text. The next activity will provide some additional practice.    In this activity we work with unions, intersections, and complements of sets. Let and be sets.    Let and , with .   Determine the elements in and . What are the elements in and ?   Determine the elements in and .    Let and be arbitrary subsets of a universal set . There are connections between , and their complements, unions, and intersections.   Use Venn diagrams to draw and .   Use the Venn diagrams and the result of (a) to find and prove a relationship between , and .   Use the Venn diagrams and the result of (a) to find and prove a relationship between , and .    In we worked with the union and intersection of two sets. There is no reason to restrict these definitions to only two sets, as the next activity illustrates.   indexed family of sets   To define an infinite collection of sets we often use what is called an indexing set . An indexing set allows us to consider a collection of objects that are in one-to-one correspondence with a set like the positive integers, or even the real numbers. When using an indexing set, we generally make a statement such as ``let for be a collection of sets indexed by some set \". The collection is called an indexed family of sets .    The set could be finite. As an example, let for in the set .   What is ? What is ?   How many sets are in the indexed family ?    The indexing set can be infinite. For example, let for in the set (where is the interval consisting of the real numbers such that ). In this case, what is ? What is ? What is ?    We have defined the union and intersection of two sets. The same idea can be extended to define the union and intersection of an indexed collection of sets.  set arbitrary intersection  Recall that if and are sets, the intersection is the set . How can we extend this definition from two sets to any collection of sets? In other words, how do we define  In the example in (b), what set is ?  set arbitrary union  Recall that if and are sets, the union is the set . How can we extend this definition from two sets to any collection of sets? In other words, how do we define  In the example in (b), what set is ?    These properties and that we learned about in are called DeMorgan's Laws. These laws apply to any union or intersection of sets, finite or infinite. The proofs are left for .   DeMorgan's Laws   Let is a collection of sets indexed by a set in some universal set . Then                  Verify DeMorgan's Laws in the specific case of in , where is any element of the indexing set .    Why should the complement of a union be an intersection and why should the complement of an intersection be a union?   Consider the definitions of unions and intersections.    "
},
{
  "id": "p-58",
  "level": "2",
  "url": "sec_union_int_comp.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paradox Russell's paradox "
},
{
  "id": "act_set_equality",
  "level": "2",
  "url": "sec_union_int_comp.html#act_set_equality",
  "type": "Activity",
  "number": "1.3",
  "title": "",
  "body": "  What should it mean for two sets to be equal? If and are sets, how do we prove that ? (This is question that requires discussion, which is different than a question that only asks for a computation or an example. Activities throughout this text will ask both types of questions.)    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.    Let and . Is ? If yes, prove your answer. If no, prove any containment that you can.   "
},
{
  "id": "p-64",
  "level": "2",
  "url": "sec_union_int_comp.html#p-64",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection set difference complement "
},
{
  "id": "p-69",
  "level": "2",
  "url": "sec_union_int_comp.html#p-69",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal "
},
{
  "id": "F_Venn",
  "level": "2",
  "url": "sec_union_int_comp.html#F_Venn",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " Venn diagrams                        "
},
{
  "id": "ex_set_eq",
  "level": "2",
  "url": "sec_union_int_comp.html#ex_set_eq",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "  Let , , and be sets. We will prove that .  To prove this set equality we must prove that and . We start with .  To prove that , we need to demonstrate that every element in is also in . To do this, we select an arbitrary element in and show that this element is in . Let . Then and . The fact that implies that but . Therefore, and , but . This implies that and , but and . So and , but . We conclude that . This proves that .  For the reverse containment, we let . So but . Since , we know that and . The fact that means that . So , , and . Thus, and . We conclude that , which shows that . The two containments, and demonstrate that .   "
},
{
  "id": "act_sets_1",
  "level": "2",
  "url": "sec_union_int_comp.html#act_sets_1",
  "type": "Activity",
  "number": "1.4",
  "title": "",
  "body": "  In this activity we work with unions, intersections, and complements of sets. Let and be sets.    Let and , with .   Determine the elements in and . What are the elements in and ?   Determine the elements in and .    Let and be arbitrary subsets of a universal set . There are connections between , and their complements, unions, and intersections.   Use Venn diagrams to draw and .   Use the Venn diagrams and the result of (a) to find and prove a relationship between , and .   Use the Venn diagrams and the result of (a) to find and prove a relationship between , and .   "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "sec_union_int_comp.html#activity-4",
  "type": "Activity",
  "number": "1.5",
  "title": "",
  "body": " indexed family of sets   To define an infinite collection of sets we often use what is called an indexing set . An indexing set allows us to consider a collection of objects that are in one-to-one correspondence with a set like the positive integers, or even the real numbers. When using an indexing set, we generally make a statement such as ``let for be a collection of sets indexed by some set \". The collection is called an indexed family of sets .    The set could be finite. As an example, let for in the set .   What is ? What is ?   How many sets are in the indexed family ?    The indexing set can be infinite. For example, let for in the set (where is the interval consisting of the real numbers such that ). In this case, what is ? What is ? What is ?    We have defined the union and intersection of two sets. The same idea can be extended to define the union and intersection of an indexed collection of sets.  set arbitrary intersection  Recall that if and are sets, the intersection is the set . How can we extend this definition from two sets to any collection of sets? In other words, how do we define  In the example in (b), what set is ?  set arbitrary union  Recall that if and are sets, the union is the set . How can we extend this definition from two sets to any collection of sets? In other words, how do we define  In the example in (b), what set is ?   "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "sec_union_int_comp.html#theorem-1",
  "type": "Theorem",
  "number": "1.4",
  "title": "DeMorgan’s Laws.",
  "body": " DeMorgan's Laws   Let is a collection of sets indexed by a set in some universal set . Then               "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "sec_union_int_comp.html#activity-5",
  "type": "Activity",
  "number": "1.6",
  "title": "",
  "body": "  Verify DeMorgan's Laws in the specific case of in , where is any element of the indexing set .    Why should the complement of a union be an intersection and why should the complement of an intersection be a union?   Consider the definitions of unions and intersections.   "
},
{
  "id": "sec_cart_prod",
  "level": "1",
  "url": "sec_cart_prod.html",
  "type": "Section",
  "number": "",
  "title": "Cartesian Products of Sets",
  "body": " Cartesian Products of Sets  The final operation on sets that we discuss is the Cartesian product (or cross product ). This is an operation that we have seen before. When we draw the graph of a line in the plane, we plot the points . These points are ordered pairs of real numbers. We can extend this idea to any sets.   Cartesian product   Let and are sets. The Cartesian product of and is the set .    In other words, the Cartesian product of and is the set of ordered pairs with coming from and coming from . Note that the order is important.    List all of the elements in .    If has elements and has elements, how many elements does the set have? Explain.    There is no reason to restrict ourselves to a Cartesian product of just two sets. This is an idea that we have encountered before. The Cartesian product is the standard real plane that we denote as and the Cartesian product is the three-dimensional real space denoted as . If we have an indexed collection of sets, with running through the set of positive integers, then we can define the Cartesian product of the sets as the set of infinite sequences , where for each . We denote this cartesian product as .  The capital pi ( ) is used to represent a product an an analog of the capital sigma ( ) that is used to represent a sum. We will study sequences in more detail later.  To conclude this section we summarize some properties of sets. Many of these properties can be extended to arbitrary collections of sets. Most of the proofs are straightforward. The associative and distributive laws are left for .    Let , , and be subsets of a universal set .   Properties of the Empty Set                            Properties of the Universal Set                            Idempotent Laws                  Commutative Laws                  Associative Laws                  Distributive Laws                  Basic Properties                  Subsets and Complements          "
},
{
  "id": "p-106",
  "level": "2",
  "url": "sec_cart_prod.html#p-106",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product cross product "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "sec_cart_prod.html#definition-2",
  "type": "Definition",
  "number": "1.5",
  "title": "",
  "body": " Cartesian product   Let and are sets. The Cartesian product of and is the set .   "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "sec_cart_prod.html#activity-6",
  "type": "Activity",
  "number": "1.7",
  "title": "",
  "body": "  List all of the elements in .    If has elements and has elements, how many elements does the set have? Explain.   "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "sec_cart_prod.html#theorem-2",
  "type": "Theorem",
  "number": "1.6",
  "title": "",
  "body": "  Let , , and be subsets of a universal set .   Properties of the Empty Set                            Properties of the Universal Set                            Idempotent Laws                  Commutative Laws                  Associative Laws                  Distributive Laws                  Basic Properties                  Subsets and Complements         "
},
{
  "id": "sec_sets_summ",
  "level": "1",
  "url": "sec_sets_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   We can consider a set to be a well-defined collection of elements.    A subset of a set is any collection of elements from that set. That is, a subset of a set is a set with the property that if , then .    If and are sets, then the union is the set . The union of an arbitrary collection of sets for in some indexing set is the set .    If and are sets, then the intersection is the set . The intersection of an arbitrary collection of sets for in some indexing set is the set .    If is a set and is a subset of , then the complement of in is the set .    If is a collection of sets with in some indexing set , where is finite or is the set of positive integers, the Cartesian product of the sets as the set of all ordered tuples of the form where .     "
},
{
  "id": "sec_sets_exer",
  "level": "1",
  "url": "sec_sets_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let , , and be subsets of a set . Express each of the following sets in mathematical notation using the symbols , , and .   The elements of that belong to and , but not .   The elements of that belong to and either or .   The elements of that belong to but not to both and .   The elements of that belong to none of the sets , , and .   The elements of that fail to belong to at least two of the sets , , and .   The elements of that fail to belong to at most one of the sets , , and .    Let . Prove or disprove.    .    .    Let and be subsets of a universal set . Prove the associative and distributive laws. That is, prove each of the following.            \\item     Prove DeMorgan's Laws. That is, let be a collection of sets indexed by a set in some universal set . Prove that            What familiar set is for any set ? Explain.   power set  If is a set, the power set of , denoted is the collection of all subsets of .   List the elements of .   If is a set with three elements, how many elements are in ?   If is a set with elements, make a conjecture about the number of elements in . Prove your conjecture?    If is a set, the power set of , denoted is the collection of all subsets of . (See .) Critique each of the following statements. Doe the statement make sense or not? If not, explain why and then correct the statement to something that is true (and non-trivial).   If is a set, then .   If is a set, then .   If is a set, then .   If is a set, then .   If is a set, then .   If and are sets and , then .    Let and be sets, both of which have at least two distinct members. Prove that there is a subset that is not the Cartesian product of a subset of with a subset of . [Thus, not every subset of a Cartesian product is the Cartesian product of a pair of subsets.]    Let be the set of real numbers that are greater than . For each , let be the open interval . Prove that , . For each , let be the closed interval . Prove that , .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. As an example of a true statement, consider the statement   Let , , and be sets such that and .   Then . We can justify the truth of this statement with a short argument. Since , there is an element . Then . Since , we also must have , which implies that . Thus, and . As an example of a false statement, consider the statement   Let , , and be sets such that .  Then . We can show that this statement is false by providing a counterexample. For example, let , , and . Then , but .   If , , and are sets and and , then .   If , , and are sets and and , then .   If and are subsets of a set and , then .   If and are subsets of a set and , then .   If and are sets, then .   If and are sets, then .   If , , and are sets, then .   If and are subsets of a set , then .   There are no elements of the set .   There are two distinct objects that belong to the set .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let , , and be subsets of a set . Express each of the following sets in mathematical notation using the symbols , , and .   The elements of that belong to and , but not .   The elements of that belong to and either or .   The elements of that belong to but not to both and .   The elements of that belong to none of the sets , , and .   The elements of that fail to belong to at least two of the sets , , and .   The elements of that fail to belong to at most one of the sets , , and .  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let . Prove or disprove.    .    .  "
},
{
  "id": "ex_set_props",
  "level": "2",
  "url": "sec_sets_exer.html#ex_set_props",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be subsets of a universal set . Prove the associative and distributive laws. That is, prove each of the following.            \\item   "
},
{
  "id": "ex_DeMorgan",
  "level": "2",
  "url": "sec_sets_exer.html#ex_DeMorgan",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove DeMorgan's Laws. That is, let be a collection of sets indexed by a set in some universal set . Prove that          "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " What familiar set is for any set ? Explain.  "
},
{
  "id": "ex_power_set",
  "level": "2",
  "url": "sec_sets_exer.html#ex_power_set",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "power set  If is a set, the power set of , denoted is the collection of all subsets of .   List the elements of .   If is a set with three elements, how many elements are in ?   If is a set with elements, make a conjecture about the number of elements in . Prove your conjecture?  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " If is a set, the power set of , denoted is the collection of all subsets of . (See .) Critique each of the following statements. Doe the statement make sense or not? If not, explain why and then correct the statement to something that is true (and non-trivial).   If is a set, then .   If is a set, then .   If is a set, then .   If is a set, then .   If is a set, then .   If and are sets and , then .  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let and be sets, both of which have at least two distinct members. Prove that there is a subset that is not the Cartesian product of a subset of with a subset of . [Thus, not every subset of a Cartesian product is the Cartesian product of a pair of subsets.]  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be the set of real numbers that are greater than . For each , let be the open interval . Prove that , . For each , let be the closed interval . Prove that , .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec_sets_exer.html#exercise-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. As an example of a true statement, consider the statement   Let , , and be sets such that and .   Then . We can justify the truth of this statement with a short argument. Since , there is an element . Then . Since , we also must have , which implies that . Thus, and . As an example of a false statement, consider the statement   Let , , and be sets such that .  Then . We can show that this statement is false by providing a counterexample. For example, let , , and . Then , but .   If , , and are sets and and , then .   If , , and are sets and and , then .   If and are subsets of a set and , then .   If and are subsets of a set and , then .   If and are sets, then .   If and are sets, then .   If , , and are sets, then .   If and are subsets of a set , then .   There are no elements of the set .   There are two distinct objects that belong to the set .  "
},
{
  "id": "sec_func_intro",
  "level": "1",
  "url": "sec_func_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Many topological properties are defined using continuous functions. We will focus on continuity later for now we review some important concepts related to functions. Much of this should be familiar, but some might be new.  First we present the basic definitions. Much of our previous work has probably been with functions that map from the reals to the reals, but we will be considering functions form a more general perspective. We start with a formal definition of a function.   function   A function  from a nonempty set to a set is a collection of ordered pairs so that   for each there is a pair in , and    if and are in , then .       Note that the first property is an existence property that if then there is an element in that matches up with . This first property also says that every element in is used, or that every element in is paired with an element in , and the element in depends on the element in that is chosen. The second property is a uniqueness one that there is only one element in that is paired with a given element in .  We generally use an alternate notation for a function. If is an element of a function , we write , and in this way we think of as a mapping from the set to the set . We indicate that is a mapping from set to set with the notation .  If maps the element to the element we also use the notation .  There is some familiar terminology and notation associated with functions. Let be a function from a set to a set .   The set is called the domain  function domain of , and we write .    The set is called the codomain  function codomain of , and we write .    The subset of is called the range  function range of , which we denote by .    If , then is the image  image of an element of under . Since each in is paired with a unique , there is only one image of under . That is why it is appropriate to use the work the when referring to the image of an element.    If and for some , then is called a preimage  preimage of an element of . For a given , there may be many different preimages of , no preimages of , or just one preimage of . It can be instructive to construct examples of each situation. The fact that a preimage of an element may not be unique is the reason we use the word a when referring to a preimage.     Knowing the domains and codomains is very important when working with functions, and we will pay a lot of attention to these sets.  We have likely been exposed to one-to-one and onto function in our past mathematical experiences. One-to-one functions (or injections) and onto functions (or surjections) are special types of functions and we present their definitions here.   function injection  function surjection  function bijection   Let be a function from a set to a set .   The function is an injection if, whenever and are in , then . Alternatively, using the function notation, is an injection if implies .    The function is a surjection if, whenever , then there is an so that is in . Alternatively, using the function notation, is a surjection if for each there exists an so that .    The function is a bijection if is both an injection and a surjection.         We often define functions with rules, but functions can also be defined by tables or graphs. We will work with functions defined by rules in this activity. The goal of this activity is to illustrate why the domain and the codomain are just as important as the rule defining the outputs when want to determine if a function is one-to-one and\/or onto. As an example, let . (Note that is the function and is the image of under .) Notice that .  This observation is enough to prove that the function is not an injection since we can see that there exist two different inputs that produce the same output.  Since , we know that for all . This implies that the function is not a surjection. For example, is in the codomain of and for all in the domain of .    We can change the domain of a function so that the function is defined on a subset of the original domain. Such a function is called a restriction.   function restriction   Let be a function from a set to a set and let be a subset of . The restriction of to is the function satisfying .    A notation used for the restriction is also . We also call an extension of . Let be defined by , and let , where is the set of positive real numbers. So has the same codomain as , but a different domain.   Show that is an injection.   Is a surjection? Justify your conclusion.    Let , and let be defined by . Notice that the function uses the same formula as the function and has the same domain as , but has a different codomain than .   Explain why is not an injection.   Is a surjection? Justify your conclusion.    Let . Define by .   Prove or disprove: the function is an injection.   Prove or disprove: the function is a surjection.    In our preview activity, the same mathematical formula was used to determine the outputs for the functions. However:   One of the functions was neither an injection nor a surjection.    One of the functions was not an injection but was a surjection.    One of the functions was an injection but was not a surjection.    One of the functions was both an injection and a surjection.     This illustrates the important fact that whether a function is injective or surjective not only depends on the formula that defines the output of the function but also on the domain and codomain of the function.  An important special function that is always an injection and surjection is the identity function function identity on a set. If is a set, the identity function on is denoted as , and for every .  "
},
{
  "id": "def_function",
  "level": "2",
  "url": "sec_func_intro.html#def_function",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " function   A function  from a nonempty set to a set is a collection of ordered pairs so that   for each there is a pair in , and    if and are in , then .      "
},
{
  "id": "p-210",
  "level": "2",
  "url": "sec_func_intro.html#p-210",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain codomain range image preimage "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "sec_func_intro.html#definition-4",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": " function injection  function surjection  function bijection   Let be a function from a set to a set .   The function is an injection if, whenever and are in , then . Alternatively, using the function notation, is an injection if implies .    The function is a surjection if, whenever , then there is an so that is in . Alternatively, using the function notation, is a surjection if for each there exists an so that .    The function is a bijection if is both an injection and a surjection.      "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "sec_func_intro.html#exploration-2",
  "type": "Preview Activity",
  "number": "2.1",
  "title": "",
  "body": "  We often define functions with rules, but functions can also be defined by tables or graphs. We will work with functions defined by rules in this activity. The goal of this activity is to illustrate why the domain and the codomain are just as important as the rule defining the outputs when want to determine if a function is one-to-one and\/or onto. As an example, let . (Note that is the function and is the image of under .) Notice that .  This observation is enough to prove that the function is not an injection since we can see that there exist two different inputs that produce the same output.  Since , we know that for all . This implies that the function is not a surjection. For example, is in the codomain of and for all in the domain of .    We can change the domain of a function so that the function is defined on a subset of the original domain. Such a function is called a restriction.   function restriction   Let be a function from a set to a set and let be a subset of . The restriction of to is the function satisfying .    A notation used for the restriction is also . We also call an extension of . Let be defined by , and let , where is the set of positive real numbers. So has the same codomain as , but a different domain.   Show that is an injection.   Is a surjection? Justify your conclusion.    Let , and let be defined by . Notice that the function uses the same formula as the function and has the same domain as , but has a different codomain than .   Explain why is not an injection.   Is a surjection? Justify your conclusion.    Let . Define by .   Prove or disprove: the function is an injection.   Prove or disprove: the function is a surjection.   "
},
{
  "id": "p-242",
  "level": "2",
  "url": "sec_func_intro.html#p-242",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "sec_comp_func",
  "level": "1",
  "url": "sec_comp_func.html",
  "type": "Section",
  "number": "",
  "title": "Composites of Functions",
  "body": " Composites of Functions  In our past mathematical experiences, we have often added and multiplied functions together (e.g., if and map from to , then and ). In topology, we generally don't care about any algebraic structure a set might have, so we will move away from sums and products, and focus on compositions of functions.  The basic idea of function composition is that, when possible, the output of a function is used as the input of a function . The resulting function can be referred to as followed by and is called the composite of with . The notation we use is (note the order  is applied first). For example, if , both mapping to , then we can compute as follows: .  In this case, , the output of the function , was used as the input for the function . This idea motivates the formal definition of the composition of two functions.   composition of functions   Let , , and be nonempty sets, and let and be functions. The composite of and is the function defined by for all     We refer to the function as a composite function, and we read as of of .    Let , , and . Define , , and by ,  .    Find the images of the elements in under the function .    Find the images of the elements in under the function .    Are any of , , and injections? Are any of , , and surjections?    Is an injection? Is a surjection? Explain.    Is an injection? Is a surjection? Explain.    In , we asked questions about whether certain composite functions were injections and\/or surjections. In mathematics, it is typical to explore whether certain properties of an object transfer to related objects. In particular, we might want to know whether or not the composite of two injective functions is also an injection. (Of course, we could ask a similar question for surjections.) These questions are explored in the next activity.    Let the sets , , , and be as follows: .    Construct a function that is an injection and a function that is an injection. In this case, is the composite function an injection? Explain.    Construct a function that is a surjection and a function that is a surjection. In this case, is the composite function a surjection? Explain.    Construct a function that is a bijection and a function that is a bijection. In this case, is the composite function a bijection? Explain.    In , we explored some properties of composite functions related to injections, surjections, and bijections. The following theorem summarizes the results that these explorations were intended to illustrate.    Let , , and be nonempty sets, and assume that and .   If and are both injections, then is an injection.    If and are both surjections, then is a surjection.    If and are both bijections, then is a bijection.         Prove part (1) of .    Prove part (2) of .    Why is the proof of part (3) of a direct consequence of parts (1) and (2)?    "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "sec_comp_func.html#definition-6",
  "type": "Definition",
  "number": "2.4",
  "title": "",
  "body": " composition of functions   Let , , and be nonempty sets, and let and be functions. The composite of and is the function defined by for all    "
},
{
  "id": "act_functions_1",
  "level": "2",
  "url": "sec_comp_func.html#act_functions_1",
  "type": "Activity",
  "number": "2.2",
  "title": "",
  "body": "  Let , , and . Define , , and by ,  .    Find the images of the elements in under the function .    Find the images of the elements in under the function .    Are any of , , and injections? Are any of , , and surjections?    Is an injection? Is a surjection? Explain.    Is an injection? Is a surjection? Explain.   "
},
{
  "id": "act_composition2",
  "level": "2",
  "url": "sec_comp_func.html#act_composition2",
  "type": "Activity",
  "number": "2.3",
  "title": "",
  "body": "  Let the sets , , , and be as follows: .    Construct a function that is an injection and a function that is an injection. In this case, is the composite function an injection? Explain.    Construct a function that is a surjection and a function that is a surjection. In this case, is the composite function a surjection? Explain.    Construct a function that is a bijection and a function that is a bijection. In this case, is the composite function a bijection? Explain.   "
},
{
  "id": "thm_compositefunctions",
  "level": "2",
  "url": "sec_comp_func.html#thm_compositefunctions",
  "type": "Theorem",
  "number": "2.5",
  "title": "",
  "body": "  Let , , and be nonempty sets, and assume that and .   If and are both injections, then is an injection.    If and are both surjections, then is a surjection.    If and are both bijections, then is a bijection.      "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "sec_comp_func.html#activity-9",
  "type": "Activity",
  "number": "2.4",
  "title": "",
  "body": "  Prove part (1) of .    Prove part (2) of .    Why is the proof of part (3) of a direct consequence of parts (1) and (2)?   "
},
{
  "id": "sec_inv_func",
  "level": "1",
  "url": "sec_inv_func.html",
  "type": "Section",
  "number": "",
  "title": "Inverse Functions",
  "body": " Inverse Functions  Now that we have studied composite functions, we will move on to consider another important idea: the inverse of a function. In previous mathematics courses, you probably learned that the exponential function (with base ) and the natural logarithm functions are inverses of each other. You may have seen this relationship expressed as follows: For each with and for each ,   if and only if . Notice that is the input and is the output for the natural logarithm function if and only if is the input and is the output for the exponential function. In essence, the inverse function (in this case, the exponential function) reverses the action of the original function (in this case, the natural logarithm function). In terms of ordered pairs (input-output pairs), this means that if is an ordered pair for a function, then is an ordered pair for its inverse. The idea of reversing the roles of the first and second coordinates is the basis for our definition of the inverse of a function.   function inverse   Let be a function. The inverse of , denoted by , is the set of ordered pairs .    Notice that this definition does not state that is a function. Rather, is simply a subset of . In , we will explore the conditions under which the inverse of a function is itself a function from to .    Let , , and . Define     Determine the inverse of each function as a set of ordered pairs.    Is a function from to ? Explain.   Is a function from to ? Explain.   Is a function from to ? Explain.    Make a conjecture about what conditions on a function will ensure that its inverse is a function from to .    The result of the should have been the following theorem.    Let and be nonempty sets, and let . The inverse of is a function from to if and only if is a bijection.    The proof of is outlined in the following activity.     is a biconditional statement, so we need to prove both directions. Let and be nonempty sets, and let .    Assume that is a bijection. We will prove that is a function, that is that satisfies the conditions of .   Let . What property does have that ensures that for some ? What conclusion can we draw about ?   Now let , and assume that . What does this tell us about elements that must be in ? What property of ensures that ? What conclusion can we draw about ?    Now assume that is a function from to . We will prove that is a bijection.   What does it take to prove that is an injection? Use the fact that is a function to prove that is an injection.   What does it take to prove that is a surjection? Use the fact that is a function to prove that is a surjection.    In the situation where is a bijection and is a function from to , we can write . In this case, we frequently say that is an invertible function , and we usually do not use the ordered pair representation for either or . Instead of writing , we write , and instead of writing , we write . Using the fact that if and only if , we can now write if and only if . formalizes this observation.    Let and be nonempty sets, and let be a bijection. Then is a function, and for every and , .    The next result provide useful information about inverse functions. The proofs are left for .    Let and be nonempty sets, and let be a bijection. Then   For every in , .    For every in , .       The next question to address is what we can say about a composition of bijections. In particular, if and are both bijections, then and are both functions. Must it be the case that is invertible and, if so, what is ?    Let and both be bijections.    Why do we know that is invertible?    Now we determine the inverse of . We might be tempted to think that is , but this composite is not defined because maps to and maps to . However, is defined. To prove that , we need to prove that two functions are equal. How do we prove that two functions are equal?    Suppose .   What tells us that there is a so that ?   What tells us that there is an so that ?   What element is ? Why?   What element is ? Why? What element is ? Why?   What element is ? Why? What can we conclude about and ? Explain.    The result of is contained in the next theorem.    Let and be bijections. Then is a bijection and .    "
},
{
  "id": "sym_finverse",
  "level": "2",
  "url": "sec_inv_func.html#sym_finverse",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": " function inverse   Let be a function. The inverse of , denoted by , is the set of ordered pairs .   "
},
{
  "id": "prog_exploringinverse",
  "level": "2",
  "url": "sec_inv_func.html#prog_exploringinverse",
  "type": "Activity",
  "number": "2.5",
  "title": "",
  "body": "  Let , , and . Define     Determine the inverse of each function as a set of ordered pairs.    Is a function from to ? Explain.   Is a function from to ? Explain.   Is a function from to ? Explain.    Make a conjecture about what conditions on a function will ensure that its inverse is a function from to .   "
},
{
  "id": "T_inverseandbijection",
  "level": "2",
  "url": "sec_inv_func.html#T_inverseandbijection",
  "type": "Theorem",
  "number": "2.7",
  "title": "",
  "body": "  Let and be nonempty sets, and let . The inverse of is a function from to if and only if is a bijection.   "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "sec_inv_func.html#activity-11",
  "type": "Activity",
  "number": "2.6",
  "title": "",
  "body": "   is a biconditional statement, so we need to prove both directions. Let and be nonempty sets, and let .    Assume that is a bijection. We will prove that is a function, that is that satisfies the conditions of .   Let . What property does have that ensures that for some ? What conclusion can we draw about ?   Now let , and assume that . What does this tell us about elements that must be in ? What property of ensures that ? What conclusion can we draw about ?    Now assume that is a function from to . We will prove that is a bijection.   What does it take to prove that is an injection? Use the fact that is a function to prove that is an injection.   What does it take to prove that is a surjection? Use the fact that is a function to prove that is a surjection.   "
},
{
  "id": "p-287",
  "level": "2",
  "url": "sec_inv_func.html#p-287",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible function "
},
{
  "id": "T_inversenotation",
  "level": "2",
  "url": "sec_inv_func.html#T_inversenotation",
  "type": "Theorem",
  "number": "2.8",
  "title": "",
  "body": "  Let and be nonempty sets, and let be a bijection. Then is a function, and for every and , .   "
},
{
  "id": "C_inversecomposition",
  "level": "2",
  "url": "sec_inv_func.html#C_inversecomposition",
  "type": "Corollary",
  "number": "2.9",
  "title": "",
  "body": "  Let and be nonempty sets, and let be a bijection. Then   For every in , .    For every in , .      "
},
{
  "id": "act_comp_inverse",
  "level": "2",
  "url": "sec_inv_func.html#act_comp_inverse",
  "type": "Activity",
  "number": "2.7",
  "title": "",
  "body": "  Let and both be bijections.    Why do we know that is invertible?    Now we determine the inverse of . We might be tempted to think that is , but this composite is not defined because maps to and maps to . However, is defined. To prove that , we need to prove that two functions are equal. How do we prove that two functions are equal?    Suppose .   What tells us that there is a so that ?   What tells us that there is an so that ?   What element is ? Why?   What element is ? Why? What element is ? Why?   What element is ? Why? What can we conclude about and ? Explain.   "
},
{
  "id": "compositionofbijections",
  "level": "2",
  "url": "sec_inv_func.html#compositionofbijections",
  "type": "Theorem",
  "number": "2.10",
  "title": "",
  "body": "  Let and be bijections. Then is a bijection and .   "
},
{
  "id": "sec_fun_set",
  "level": "1",
  "url": "sec_fun_set.html",
  "type": "Section",
  "number": "",
  "title": "Functions and Sets",
  "body": " Functions and Sets  We conclude this section with a connection between subsets and functions. A bit of notation first. If is a function from a set to a set , and if is a subset of and is a subset of , we define and as , and .  We call the image of the set under and is the preimage of the set under . Note that is defined for any function, not just invertible functions. So it is important to recognize that the use of the notation does not imply that is invertible.  When we work with continuous functions in later sections, we will need to understand how a function behaves with respect to subsets. One result is in the following lemma.    Let be a function and let be a collection of subsets of for in some indexing set , and be a collection of subsets of for in some indexing set . Then    and     .       Let be a function and let be a collection of subsets of for in some indexing set . To prove part 1, we demonstrate the containment in both directions.  Let . Then for some . It follows that for some . Thus, . We conclude that .  Now let . Then for some . Since , it follows that . Thus, . The two containments prove part 1.  For part 2, we again demonstrate the containments in both directions. Let . Then . So there exists such that . This implies that . We conclude that .  For the reverse containment, let . Then for some . Thus, . So . Thus, . The two containments verify part 2.    At this point it is reasonable to ask if would still hold if we replace unions with intersections. We leave that question for .  Another result is contained in the next activity.   Let , , and be sets, and let and be functions. Let be a subset of . There is a relationship between and . Find and prove this relationship.   "
},
{
  "id": "lem_functions_subsets",
  "level": "2",
  "url": "sec_fun_set.html#lem_functions_subsets",
  "type": "Lemma",
  "number": "2.11",
  "title": "",
  "body": "  Let be a function and let be a collection of subsets of for in some indexing set , and be a collection of subsets of for in some indexing set . Then    and     .       Let be a function and let be a collection of subsets of for in some indexing set . To prove part 1, we demonstrate the containment in both directions.  Let . Then for some . It follows that for some . Thus, . We conclude that .  Now let . Then for some . Since , it follows that . Thus, . The two containments prove part 1.  For part 2, we again demonstrate the containments in both directions. Let . Then . So there exists such that . This implies that . We conclude that .  For the reverse containment, let . Then for some . Thus, . So . Thus, . The two containments verify part 2.   "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "sec_fun_set.html#activity-13",
  "type": "Activity",
  "number": "2.8",
  "title": "",
  "body": " Let , , and be sets, and let and be functions. Let be a subset of . There is a relationship between and . Find and prove this relationship.  "
},
{
  "id": "sec_card_set",
  "level": "1",
  "url": "sec_card_set.html",
  "type": "Section",
  "number": "",
  "title": "The Cardinality of a Set",
  "body": " The Cardinality of a Set  How big is a set? When a set is finite, we can count the number of elements in the set and answer the question directly. When a set is infinite, the question is a little more complicated. For example, how big is ? How big is ? Since is a subset of , we might think that contains more elements than . But is infinite and how many more elements can we have than infinity? We won't answer that question in this section, but it is an interesting one to consider.  If two finite sets have the same number of elements, then it should seem natural to say that the sets are of the same size. How do we extend this to infinite sets? If two finite sets have the same number of elements, then we can pair each element in one set with exactly one element in the other. This is exactly what a bijection does. So a set with elements can be paired with the set , where is a positive integer. This is how we can define a finite set.   finite set   A set is a finite set if or there is a bijection mapping to the set for some positive integer .     cardinality of a set In the case that , we say that has cardinality  , and if there is a bijection from to the set , we say that has cardinality . If there is no positive integer such that there is a bijection from set to we say that is an infinite set and say that has infinite cardinality. We use the word cardinality instead of number of elements because we can't actually count the number of elements in an infinite set. We denote the cardinality of the set (the number of elements in the set) by . It is left to the homework to show that if and are sets with and , then if and only if there is a bijection . This tells us that cardinality is well defined. Since composites of bijections are bijections with inverses that are bijections, if there is a bijection from set to and a bijection from a set to for some positive integer , then there is a bijection between and . Using this idea, we say that two sets (either finite or infinite) have the same cardinality if there is a bijection between the sets. We will discuss cardinality in more detail a bit later.  "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "sec_card_set.html#definition-8",
  "type": "Definition",
  "number": "2.12",
  "title": "",
  "body": " finite set   A set is a finite set if or there is a bijection mapping to the set for some positive integer .   "
},
{
  "id": "p-322",
  "level": "2",
  "url": "sec_card_set.html#p-322",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality infinite cardinality "
},
{
  "id": "sec_func_summ",
  "level": "1",
  "url": "sec_func_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A function from a nonempty set to a set is a collection of ordered pairs so that for each there is a pair in , and if and are in , then . If is a function we use the notation to indicate that .    If is a function from to , the set is the domain of the function.    If is a function from to , the set is the codomain of the function. The set is the range of the function. So the range of a function is a subset of the codomain.    A function from a set to a set is an injection if, whenever for , , then . The function is a surjection if, whenever , then there is an so that .    If is a function from a set to a set and if is a function from to a set , then the composite is a function from to defined by for every .    A function from a set to a set is a bijection if is both a surjection and injection. When is a bijection from to , then has an inverse defined by when .    If is a function from a set to a set , and if is a subset of , then image of under is the set , and if is a subset of , the inverse image of is the set .    Important properties that relate images and inverse images of sets and set unions are the following. If is a function from a set to a set , and if is a collection of subsets of for in some indexing set , and be a collection of subsets of for in some indexing set , then    and     .        "
},
{
  "id": "sec_func_exer",
  "level": "1",
  "url": "sec_func_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Find a function such that each element in the codomain has exactly one preimage.   Find a function such that each element in the codomain has at least two preimages.   Find a function such that each element has exactly two preimages.   Find a function such that there is an element in the codomain that has exactly three preimages and another element in the codomain that as exactly two preminages.   Find a function such that there is an element in the codomain that has infinitely many preimages.    For each of the following functions, determine if the function is an injection, a surjection, a bijection, or none of these. Remember to be careful about the domain and range in each case. Justify all of your conclusions.    defined by , for all     defined by , for all     defined by , for all     defined by , for all     defined by for every , where     defined by for every     Let and let , and define as given in Table .   A function from to     1  2  3  4  5  6  7  8  9  10                   If an injection? Is a surjection? Explain.   Find a largest subset of (largest in the number of elements of ) such that is an injection.   Find a subset of such that is a surjection.   Find subsets of and of such that is a bijection.    Let and be sets, both of which have at least two distinct members.   Illustrate a subset that is the Cartesian product of a subset of with a subset of .   Show that there is a subset that is not the Cartesian product of a subset of with a subset of . [Thus, not every subset of a Cartesian product is the Cartesian product of a pair of subsets.]    The cardinality of a finite set is defined to be the number of elements of that set. We denote the cardinality of a set as . Let and be sets with and for some positive integers and . Prove that there is a bijection if and only if .    Let and be sets and let be a function.   Let be a subset of . Show that . Make an example to show that in general, .   To show that the sets are not equal, consider sets and with two elements.   Let be a subset of . Show that . Make an example to show that in general, .   To show that the sets are not equal, consider sets and with two elements.   Prove that is a surjection if and only if for every subset of .   Prove that is an injection if and only if for every subset of .    Let be a function and let be a collection of subsets of for in some indexing set , and be a collection of subsets of for in some indexing set . Prove or disprove each of the following. If a statement is not true, is either containment true? Prove your answers.            Let and be nonempty sets, and let be a bijection. Prove that   For every in , .   For every in , .    Let , , and be sets, and let and be functions. Let be a subset of . Show that .    Let and be nonempty sets, and let . Define by , where . We call the projection of onto . Let and be nonempty sets, and let . Assume that for each there is a function . For example, let and . We could then define by for either or .   Prove that is a surjection for each .   Prove that there is a unique function such that for each . (Note that one of the maps to and the other maps to .)   The function from part (b) is denoted as . Let and be two nonempty sets, and let . Assume that there are functions for each . Show that .   Suppose that each has an inverse . Show that .    Let be the set of positive integers. Define as follows: For each , let . Is the function an injection? Is the function a surjection? Justify your conclusions.   Start by calculating several outputs for the function before you attempt to write a proof. In exploring whether or not the function is an injection, it might be a good idea to use cases based on whether the inputs are even or odd. In exploring whether is a surjection, consider using cases based on whether the output is positive or less than or equal to zero.    An operation on a set is a function from to that assigns to the pair the element in . For example, addition of integers can be defined as a function that maps the pair to the integer .   Is the function an injection? Justify your conclusion.   Is the function a surjection? Justify your conclusion.    Let , , and be sets and let and be functions.   Is it true that if is an injection, then both and are injections? If the answer is no, are there any conditions that or must satisfy if an injection? Prove your answers.   Is it true that if is a surjection, then both and are surjections? If the answer is no, are there any conditions that or must satisfy if a surjection? Prove your answers.    Is composition of functions a commutative operation? Prove your answer.   Is composition of functions an associative operation? Prove your answer.    Define by for all . Write the inverse of as a set of ordered pairs, and explain why is not a function.   Define by for all . Write the inverse of as a set of ordered pairs, and explain why is a function.   Is it possible to write a formula for , where ? The answer to this question depends on whether or not it is possible to define a cube root of elements of . Recall that for a real number , we define the cube root of to be the real number such that . That is, if and only if . Using this idea, is it possible to define the cube root of each element of ? If so, what is , , , , and .   Now answer the question posed at the beginning of part (c). If possible, determine a formula for where .    Let be the set of all functions that are continuous on (use your memory of continuous functions from calculus for this problem). Let be the subset of consisting of all functions possessing a continuous derivative on . Let be the subset of consisting of all functions whose value at is 0.   Give an example of a function that is in and not in with .   Give an example of a function that is in but not in with .   Give an example of a function that is in with .   Let be defined by . Is the function invertible? Justify your response.   To each function , let be the function defined by for .   Verify that maps to .   Show that is invertible by finding a function such that and are inverse functions.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a subset of , then .   If is a subset of , then .   If is a subset of , then .   If is a subset of , then .   If and are subsets of with , then .   If and are subsets of with , then .   If and are subsets of with , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec_func_exer.html#exercise-11",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find a function such that each element in the codomain has exactly one preimage.   Find a function such that each element in the codomain has at least two preimages.   Find a function such that each element has exactly two preimages.   Find a function such that there is an element in the codomain that has exactly three preimages and another element in the codomain that as exactly two preminages.   Find a function such that there is an element in the codomain that has infinitely many preimages.  "
},
{
  "id": "exer_forexample",
  "level": "2",
  "url": "sec_func_exer.html#exer_forexample",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " For each of the following functions, determine if the function is an injection, a surjection, a bijection, or none of these. Remember to be careful about the domain and range in each case. Justify all of your conclusions.    defined by , for all     defined by , for all     defined by , for all     defined by , for all     defined by for every , where     defined by for every   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec_func_exer.html#exercise-13",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and let , and define as given in Table .   A function from to     1  2  3  4  5  6  7  8  9  10                   If an injection? Is a surjection? Explain.   Find a largest subset of (largest in the number of elements of ) such that is an injection.   Find a subset of such that is a surjection.   Find subsets of and of such that is a bijection.  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec_func_exer.html#exercise-14",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let and be sets, both of which have at least two distinct members.   Illustrate a subset that is the Cartesian product of a subset of with a subset of .   Show that there is a subset that is not the Cartesian product of a subset of with a subset of . [Thus, not every subset of a Cartesian product is the Cartesian product of a pair of subsets.]  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec_func_exer.html#exercise-15",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " The cardinality of a finite set is defined to be the number of elements of that set. We denote the cardinality of a set as . Let and be sets with and for some positive integers and . Prove that there is a bijection if and only if .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec_func_exer.html#exercise-16",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let and be sets and let be a function.   Let be a subset of . Show that . Make an example to show that in general, .   To show that the sets are not equal, consider sets and with two elements.   Let be a subset of . Show that . Make an example to show that in general, .   To show that the sets are not equal, consider sets and with two elements.   Prove that is a surjection if and only if for every subset of .   Prove that is an injection if and only if for every subset of .  "
},
{
  "id": "ex_intersection_image",
  "level": "2",
  "url": "sec_func_exer.html#ex_intersection_image",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be a function and let be a collection of subsets of for in some indexing set , and be a collection of subsets of for in some indexing set . Prove or disprove each of the following. If a statement is not true, is either containment true? Prove your answers.          "
},
{
  "id": "ex_inverse_composite",
  "level": "2",
  "url": "sec_func_exer.html#ex_inverse_composite",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let and be nonempty sets, and let be a bijection. Prove that   For every in , .   For every in , .  "
},
{
  "id": "ex_inverse_composite_sets",
  "level": "2",
  "url": "sec_func_exer.html#ex_inverse_composite_sets",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let , , and be sets, and let and be functions. Let be a subset of . Show that .  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec_func_exer.html#exercise-20",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let and be nonempty sets, and let . Define by , where . We call the projection of onto . Let and be nonempty sets, and let . Assume that for each there is a function . For example, let and . We could then define by for either or .   Prove that is a surjection for each .   Prove that there is a unique function such that for each . (Note that one of the maps to and the other maps to .)   The function from part (b) is denoted as . Let and be two nonempty sets, and let . Assume that there are functions for each . Show that .   Suppose that each has an inverse . Show that .  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec_func_exer.html#exercise-21",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be the set of positive integers. Define as follows: For each , let . Is the function an injection? Is the function a surjection? Justify your conclusions.   Start by calculating several outputs for the function before you attempt to write a proof. In exploring whether or not the function is an injection, it might be a good idea to use cases based on whether the inputs are even or odd. In exploring whether is a surjection, consider using cases based on whether the output is positive or less than or equal to zero.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec_func_exer.html#exercise-22",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " An operation on a set is a function from to that assigns to the pair the element in . For example, addition of integers can be defined as a function that maps the pair to the integer .   Is the function an injection? Justify your conclusion.   Is the function a surjection? Justify your conclusion.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec_func_exer.html#exercise-23",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let , , and be sets and let and be functions.   Is it true that if is an injection, then both and are injections? If the answer is no, are there any conditions that or must satisfy if an injection? Prove your answers.   Is it true that if is a surjection, then both and are surjections? If the answer is no, are there any conditions that or must satisfy if a surjection? Prove your answers.  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec_func_exer.html#exercise-24",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Is composition of functions a commutative operation? Prove your answer.   Is composition of functions an associative operation? Prove your answer.  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec_func_exer.html#exercise-25",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Define by for all . Write the inverse of as a set of ordered pairs, and explain why is not a function.   Define by for all . Write the inverse of as a set of ordered pairs, and explain why is a function.   Is it possible to write a formula for , where ? The answer to this question depends on whether or not it is possible to define a cube root of elements of . Recall that for a real number , we define the cube root of to be the real number such that . That is, if and only if . Using this idea, is it possible to define the cube root of each element of ? If so, what is , , , , and .   Now answer the question posed at the beginning of part (c). If possible, determine a formula for where .  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec_func_exer.html#exercise-26",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Let be the set of all functions that are continuous on (use your memory of continuous functions from calculus for this problem). Let be the subset of consisting of all functions possessing a continuous derivative on . Let be the subset of consisting of all functions whose value at is 0.   Give an example of a function that is in and not in with .   Give an example of a function that is in but not in with .   Give an example of a function that is in with .   Let be defined by . Is the function invertible? Justify your response.   To each function , let be the function defined by for .   Verify that maps to .   Show that is invertible by finding a function such that and are inverse functions.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec_func_exer.html#exercise-27",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a subset of , then .   If is a subset of , then .   If is a subset of , then .   If is a subset of , then .   If and are subsets of with , then .   If and are subsets of with , then .   If and are subsets of with , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .   If and are subsets of , then .  "
},
{
  "id": "sec_metric_space_intro",
  "level": "1",
  "url": "sec_metric_space_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Metric spaces are particular examples of topological spaces. A metric space is a space that has a metric defined on it. A metric is a function that measures the distance between points in a metric space.  We are familiar with one special metric, the Euclidean metric in where .   The Euclidean distance between and and the Euclidean unit circle in .    Using this metric, the distance between two points and is the length of the segment connecting the points, while the unit circle (the set of points a distance 1 from the origin) looks like what we think of as a circle as illustrated in .  As we will see, there are many other metrics that can be defined on , or on other sets.   metric taxicab   Consider the function that assigns to each pair of points in the real number .  This function is sometimes called the taxicab metric or distance because the distance between points and can be thought of as obtained by driving around a city block rather than going directly from point to point .  Any distance function should satisfy certain properties: the distance between two points should never be negative, the distance from point to point should be the same as the distance from point to point , the shortest distance between two points and should never be more than the distance from to some point plus the distance from to , and the distance between points should only be zero if the points are the same. In this activity, we determine if has these properties. Let and in .    Prove that .    Prove that .    Prove that if and only if .    Let in . Read the proof of (below) and then use to show that .  (Do you have any questions about the proof of the lemma?)    Let and be real numbers. Then .    Let and be real numbers. To prove the lemma we consider cases.   Case 1: and  In this case is nonnegative and so , , and . Then .    Case 2: and  In this case and where and are nonnegative. It follows from Case 1 that .    Case 3: One of or is positive and the other negative  Without loss of generality we assume and . Again we consider cases. Note that implies .   Suppose . Then and so . It follows that .    The last case is when . In this case and so . Then . Finally, implies . So and .      This proves our lemma for every possible pair , .      A picture to illustrate the taxicab distance between (points and is shown in . Draw a picture of the unit circle (the set of points a distance 1 from the origin) using the Taxicab metric. Explain your reasoning.   The taxicab distance between and in .      The taxicab metric can be extended to for any as follows. If and are in , then the taxicab distance from to is defined as .  "
},
{
  "id": "F_Euclidean_metric",
  "level": "2",
  "url": "sec_metric_space_intro.html#F_Euclidean_metric",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " The Euclidean distance between and and the Euclidean unit circle in .   "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "sec_metric_space_intro.html#exploration-3",
  "type": "Preview Activity",
  "number": "3.1",
  "title": "",
  "body": " metric taxicab   Consider the function that assigns to each pair of points in the real number .  This function is sometimes called the taxicab metric or distance because the distance between points and can be thought of as obtained by driving around a city block rather than going directly from point to point .  Any distance function should satisfy certain properties: the distance between two points should never be negative, the distance from point to point should be the same as the distance from point to point , the shortest distance between two points and should never be more than the distance from to some point plus the distance from to , and the distance between points should only be zero if the points are the same. In this activity, we determine if has these properties. Let and in .    Prove that .    Prove that .    Prove that if and only if .    Let in . Read the proof of (below) and then use to show that .  (Do you have any questions about the proof of the lemma?)    Let and be real numbers. Then .    Let and be real numbers. To prove the lemma we consider cases.   Case 1: and  In this case is nonnegative and so , , and . Then .    Case 2: and  In this case and where and are nonnegative. It follows from Case 1 that .    Case 3: One of or is positive and the other negative  Without loss of generality we assume and . Again we consider cases. Note that implies .   Suppose . Then and so . It follows that .    The last case is when . In this case and so . Then . Finally, implies . So and .      This proves our lemma for every possible pair , .      A picture to illustrate the taxicab distance between (points and is shown in . Draw a picture of the unit circle (the set of points a distance 1 from the origin) using the Taxicab metric. Explain your reasoning.   The taxicab distance between and in .     "
},
{
  "id": "sec_metric_space",
  "level": "1",
  "url": "sec_metric_space.html",
  "type": "Section",
  "number": "",
  "title": "Metric Spaces",
  "body": " Metric Spaces  For most of our mathematical careers our mathematics has taken place in , where we measure the distance between points and with the standard Euclidean distance . In our preview activity we saw that the function satisfies many of the same properties as . These properties allow us to use or as distance functions. We call any distance function a metric , and any space on which a metric is defined is called a metric space .   metric   A metric on a space is a function that satisfies the properties:    for all ,     if and only if in ,     for all , and     for all .       Properties 1 and 2 of a metric say that a metric is positive definite , while property 3 states that a metric is symmetric . Property 4 of the definition is usually the most difficult property to verify for a metric and is called the triangle inequality . triangle inequality    metric space   A metric space is a pair , where is a metric on the space .    When the metric is clear from the context, we just refer to as the metric space.    For each of the following, determine if is a metric space. If is a metric space, explain why. If is not a metric space, determine which properties of a metric satisfies and which it does not. If is a metric space, give a geometric description of the unit circle (the set of all points in a distance from the zero element) in the space.     , .     ,      ,      , the set of all continuous functions on the interval , .    It should be noted that not all metric spaces are infinite. We discuss one metric on a finite space in the following example.    Let and define with the entries in Table .   Table of values for a function                             By definition we have for all with if and only if . Since the table is symmetric around the diagonal, we can see that for all . The only item to verify is the triangle inequality. If , then for any . If , then and .  That leaves three cases to consider, when , , and are distinct. Now .  So is a metric on .     shows that even finite sets can be metric spaces. In fact, we can make a finite metric space by taking any finite subset of a metric space and use as a metric the restriction of to . illustrates this by letting , , and in . Then is the restriction of the Euclidean metric to the set . Another way to construct a finite metric space is to start with a finite set of points and make a graph with the points as vertices. Construct edges so that the graph is connected (that is, there is a path from any one vertex to any other) and give weights to the edges as illustrated in . We then define a metric on by letting be the length of a shortest path between vertices and in the graph. For example, in this example.   A graph to define a metric.    Just as with the Euclidean and taxicab metrics, item (c) in can be extended to as follows. If and are in , then the maximum distance from to is defined as .   metric max The metric is called the max metric. In the following section we prove that the Euclidean metric is in fact a metric. Proofs that and are metrics are left to and .  "
},
{
  "id": "p-433",
  "level": "2",
  "url": "sec_metric_space.html#p-433",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric metric space "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "sec_metric_space.html#definition-9",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": " metric   A metric on a space is a function that satisfies the properties:    for all ,     if and only if in ,     for all , and     for all .      "
},
{
  "id": "p-439",
  "level": "2",
  "url": "sec_metric_space.html#p-439",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive definite symmetric triangle inequality "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "sec_metric_space.html#definition-10",
  "type": "Definition",
  "number": "3.5",
  "title": "",
  "body": " metric space   A metric space is a pair , where is a metric on the space .   "
},
{
  "id": "act_MS_metrics",
  "level": "2",
  "url": "sec_metric_space.html#act_MS_metrics",
  "type": "Activity",
  "number": "3.2",
  "title": "",
  "body": "  For each of the following, determine if is a metric space. If is a metric space, explain why. If is not a metric space, determine which properties of a metric satisfies and which it does not. If is a metric space, give a geometric description of the unit circle (the set of all points in a distance from the zero element) in the space.     , .     ,      ,      , the set of all continuous functions on the interval , .   "
},
{
  "id": "exp_finite_ms",
  "level": "2",
  "url": "sec_metric_space.html#exp_finite_ms",
  "type": "Example",
  "number": "3.6",
  "title": "",
  "body": "  Let and define with the entries in Table .   Table of values for a function                             By definition we have for all with if and only if . Since the table is symmetric around the diagonal, we can see that for all . The only item to verify is the triangle inequality. If , then for any . If , then and .  That leaves three cases to consider, when , , and are distinct. Now .  So is a metric on .   "
},
{
  "id": "F_Graph_metric",
  "level": "2",
  "url": "sec_metric_space.html#F_Graph_metric",
  "type": "Figure",
  "number": "3.8",
  "title": "",
  "body": " A graph to define a metric.   "
},
{
  "id": "p-454",
  "level": "2",
  "url": "sec_metric_space.html#p-454",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "max "
},
{
  "id": "sec_euclid_rn",
  "level": "1",
  "url": "sec_euclid_rn.html",
  "type": "Section",
  "number": "",
  "title": "The Euclidean Metric on <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " The Euclidean Metric on  The metric space that is most familiar to us is the metric space , where    metric Euclidean The metric called the standard or Euclidean metric on .  We can generalize this Euclidean metric from to any dimensional real space. Let be a positive integer and let and be in . We define by .  In the next activity we will show that satisfies the first three properties of a metric.    Let and be in .    Show that .    Show that .    Show that if , then .    Show that if , then .    Proving that the triangle inequality is satisfied is often the most difficult part of proving that a function is a metric. We will work through this proof with the help of the Cauchy-Schwarz Inequality.   Cauchy-Schwarz Inequality  Cauchy-Schwarz Inequality   Let be a positive integer and , be in . Then .      Before we prove the Cauchy-Schwarz Inequality, let us analyze it in two specific situations.    Let and in . Verify the Cauchy-Schwarz Inequality in this case.    Let and in . Verify the Cauchy-Schwarz Inequality in this case.    Now we prove the Cauchy-Schwarz Inequality.   Let be a positive integer and , be in . To verify it suffices to show that .  This is difficult to do directly, but there is a nice trick one can use. Consider the expression .  (All of our sums are understood to be from 1 to , so we will omit the limits on the sums for the remainder of the proof.) Now .  To interpret this last expression more clearly, let , and . The inequality defined by can then be written in the form .  So we have a quadratic that is never negative. This implies that the quadratic can have at most one real zero. The quadratic formula gives the roots of as .  If , then has two real roots. Therefore, in order for to have at most one real zero we must have or .  This establishes the Cauchy-Schwarz Inequality.   One consequence of the Cauchy-Schwarz Inequality that we will need to show that is a metric is the following.    Let be a positive integer and , be in . Then .      Before we prove the corollary, let us analyze it in two specific situations.    Let and in . Verify in this case.    Let and in . Verify in this case.    Now we prove .   Let be a positive integer and , be in . Now .  Taking the square roots of both sides yields the desired inequality.   We can now complete the proof that is a metric.   Let be a positive integer and , , and be in . Use to show that .   This concludes our proof that the Euclidean metric is in fact a metric.  We have seen several metrics in this section, some of which are given special names. Let and    The Euclidean metric , where .    The Taxicab metric , where .    The max metric , where .     We have only shown that and are metrics on , but similar arguments apply in . Proofs are left to and . In addition, the discrete metric  metric discrete  makes any set into a metric space. The proof is left to .  "
},
{
  "id": "p-456",
  "level": "2",
  "url": "sec_euclid_rn.html#p-456",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard Euclidean "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "sec_euclid_rn.html#activity-15",
  "type": "Activity",
  "number": "3.3",
  "title": "",
  "body": "  Let and be in .    Show that .    Show that .    Show that if , then .    Show that if , then .   "
},
{
  "id": "lem_CS_Euclidean",
  "level": "2",
  "url": "sec_euclid_rn.html#lem_CS_Euclidean",
  "type": "Lemma",
  "number": "3.9",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality  Cauchy-Schwarz Inequality   Let be a positive integer and , be in . Then .   "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "sec_euclid_rn.html#activity-16",
  "type": "Activity",
  "number": "3.4",
  "title": "",
  "body": "  Before we prove the Cauchy-Schwarz Inequality, let us analyze it in two specific situations.    Let and in . Verify the Cauchy-Schwarz Inequality in this case.    Let and in . Verify the Cauchy-Schwarz Inequality in this case.   "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "sec_euclid_rn.html#proof-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be a positive integer and , be in . To verify it suffices to show that .  This is difficult to do directly, but there is a nice trick one can use. Consider the expression .  (All of our sums are understood to be from 1 to , so we will omit the limits on the sums for the remainder of the proof.) Now .  To interpret this last expression more clearly, let , and . The inequality defined by can then be written in the form .  So we have a quadratic that is never negative. This implies that the quadratic can have at most one real zero. The quadratic formula gives the roots of as .  If , then has two real roots. Therefore, in order for to have at most one real zero we must have or .  This establishes the Cauchy-Schwarz Inequality.  "
},
{
  "id": "cor_SL",
  "level": "2",
  "url": "sec_euclid_rn.html#cor_SL",
  "type": "Corollary",
  "number": "3.10",
  "title": "",
  "body": "  Let be a positive integer and , be in . Then .   "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "sec_euclid_rn.html#activity-17",
  "type": "Activity",
  "number": "3.5",
  "title": "",
  "body": "  Before we prove the corollary, let us analyze it in two specific situations.    Let and in . Verify in this case.    Let and in . Verify in this case.   "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "sec_euclid_rn.html#proof-4",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Let be a positive integer and , be in . Now .  Taking the square roots of both sides yields the desired inequality.  "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "sec_euclid_rn.html#activity-18",
  "type": "Activity",
  "number": "3.6",
  "title": "",
  "body": " Let be a positive integer and , , and be in . Use to show that .  "
},
{
  "id": "p-492",
  "level": "2",
  "url": "sec_euclid_rn.html#p-492",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete metric "
},
{
  "id": "sec_metric_space_summ",
  "level": "1",
  "url": "sec_metric_space_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A metric on a space is a function that measures distance between elements in the space. More formally, a metric on a space is a function such that    for all ,     if and only if in ,     for all , and     for all .   A metric space is any space combined with a metric defined on that space.    The Euclidean, taxicab, and max metric are all metrics on , so they all provide ways to measure distances between points in . These metric are different in how they define the distances.   The Euclidean metric is the standard metric that we have used through our mathematical careers. For elements and in , the Euclidean metric is defined as . With this metric, the unit circle in (the set of points a distance from the origin) is the standard unit circle we know from Euclidean geometry.    The taxicab metric is defined as . The unit circle in using the taxicab metric is the square with vertices , , , and when viewed in Euclidean geometry.    The max metric is defined by . Under the max metric, the unit circle in is the square with vertices , , , and when viewed in Euclidean geometry.        "
},
{
  "id": "sec_metric_space_exer",
  "level": "1",
  "url": "sec_metric_space_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let be a set. Show that the function (the discrete metric) defined by is a metric.    Let and define by . That is, is the remainder when is divided by .   For each value of , determine if defines a metric on . Prove your answers.    The unit circle in with metric is the set of all points in whose distance from the origin is . If we let the distance be less than , then we have what we call an open ball. We can make this same definition in any metric space.  open ball in a metric space   Let be a metric space. For any positive real number , the open ball centered at of radius  in is the the set .   If is a metric space for a given value of , determine all of the open balls in centered at . If is not a metric space, explain why.               Let be the set of all rational numbers in reduced form. A rational number is in reduced form if and and have no common factors larger than . Define by .   Prove that is a metric.   A metric allows us to determine which elements in our metric space are ''close'' together. Describe the set of elements in that are a distance no more than from using this metric . In other words, describe the open ball centered at with radius (see ).   If , , and are elements of a metric space , we say that is between and if . Using the Euclidean metric on , there are infinitely many different rational numbers between and (the rational numbers between and that lie on the Euclidean line through and . Describe all of the points in that are between and .    Let be the metric space from . If , , and are elements of a metric space , we say that is between  and if . Using the Euclidean metric on , there are infinitely many different rational numbers between and (the rational numbers between and that lie on the Euclidean line through and . In this exercise we explore numbers that are between others in the space .   Find all of the elements in that are between and .   Which is closer to in : or ?   Now find all of the elements in that are between and .    Prove that the taxicab metric is a metric on .    Let and be nonempty finite subsets of , and let .   Prove that .   Prove that the max metric is a metric on .    If , we let . For and , define by    Show that is a metric (called the hub metric).   Let . Explicitly describe which points are in the set in . (See for the definition of an open ball.)   Let . Explicitly describe which points are in the set in .   Now explicitly describe all open balls in .    Let be the set of integers and let be a prime. For each pair of distinct integers and there is an integer such that , where does not divide . For example, if , , and , then . So . However, if and , then . So . Define by    Determine the values of using and using .   Prove that if , , and are in , then .   Prove that is a metric space.   Let . Describe the set of all elements in such that .   Continue with . Describe the set of all elements in such that .    Let and be metric spaces. We can make the Cartesian product into a metric space by defining a metric on as follows. If and are in , then . You may assume without proof that is a metric on .   Let and . Let and . What is Recall that and .   Let and , where is the discrete metric. Let in . Let in . Describe, geometrically, what the open ball looks like in the product space . Draw a picture of this open ball.    Let , the set of positive reals, and define by . Is is a metric on ? Prove your answer.    Let be defined by . Show that is a metric on . (Hint: For the triangle inequality, note that where , and is an increasing function.)    Let be a metric space and be a constant. Define by . Under what, if any, conditions is a metric on . Justify your answer.    A real valued function on an interval is concave if for all and all and in the interval. Note that the expression is linear in and is equal to when and when . So is a parameterization of the line segment joining to . As indicates, equation implies that the graph of a concave function on any interval lies above the secant line joining the points and .   A concave function.     Let map to with the standard Euclidean metric. Show that is concave on the interval .   Start with the fact that .   Show that if is a concave function on and , an interval and and are in the interval, then .   Consider with . Then use the fact that is in .   Suppose is a metric space and is an increasing, concave function such that if and only if . Prove that is a metric on .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   The function defined by is a metric on .   Every nonempty set can be made into a metric space.   It is possible to define an infinite number of metrics on every set containing at least two elements.   Let and be metric spaces with . Then the function defined by is a metric on .   Let be a metric space. If is infinite, then the range of is also an infinite set.   "
},
{
  "id": "ex_MS_discrete",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_MS_discrete",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let be a set. Show that the function (the discrete metric) defined by is a metric.  "
},
{
  "id": "ex_MS_mod_metric",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_MS_mod_metric",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let and define by . That is, is the remainder when is divided by .   For each value of , determine if defines a metric on . Prove your answers.    The unit circle in with metric is the set of all points in whose distance from the origin is . If we let the distance be less than , then we have what we call an open ball. We can make this same definition in any metric space.  open ball in a metric space   Let be a metric space. For any positive real number , the open ball centered at of radius  in is the the set .   If is a metric space for a given value of , determine all of the open balls in centered at . If is not a metric space, explain why.             "
},
{
  "id": "ex_MS_Q_metric",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_MS_Q_metric",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be the set of all rational numbers in reduced form. A rational number is in reduced form if and and have no common factors larger than . Define by .   Prove that is a metric.   A metric allows us to determine which elements in our metric space are ''close'' together. Describe the set of elements in that are a distance no more than from using this metric . In other words, describe the open ball centered at with radius (see ).   If , , and are elements of a metric space , we say that is between and if . Using the Euclidean metric on , there are infinitely many different rational numbers between and (the rational numbers between and that lie on the Euclidean line through and . Describe all of the points in that are between and .  "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-31",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be the metric space from . If , , and are elements of a metric space , we say that is between  and if . Using the Euclidean metric on , there are infinitely many different rational numbers between and (the rational numbers between and that lie on the Euclidean line through and . In this exercise we explore numbers that are between others in the space .   Find all of the elements in that are between and .   Which is closer to in : or ?   Now find all of the elements in that are between and .  "
},
{
  "id": "ex_Taxicab",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_Taxicab",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Prove that the taxicab metric is a metric on .  "
},
{
  "id": "ex_Max",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_Max",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let and be nonempty finite subsets of , and let .   Prove that .   Prove that the max metric is a metric on .  "
},
{
  "id": "ex_MS_hub",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_MS_hub",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " If , we let . For and , define by    Show that is a metric (called the hub metric).   Let . Explicitly describe which points are in the set in . (See for the definition of an open ball.)   Let . Explicitly describe which points are in the set in .   Now explicitly describe all open balls in .  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-35",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let be the set of integers and let be a prime. For each pair of distinct integers and there is an integer such that , where does not divide . For example, if , , and , then . So . However, if and , then . So . Define by    Determine the values of using and using .   Prove that if , , and are in , then .   Prove that is a metric space.   Let . Describe the set of all elements in such that .   Continue with . Describe the set of all elements in such that .  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-36",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let and be metric spaces. We can make the Cartesian product into a metric space by defining a metric on as follows. If and are in , then . You may assume without proof that is a metric on .   Let and . Let and . What is Recall that and .   Let and , where is the discrete metric. Let in . Let in . Describe, geometrically, what the open ball looks like in the product space . Draw a picture of this open ball.  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-37",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let , the set of positive reals, and define by . Is is a metric on ? Prove your answer.  "
},
{
  "id": "ex_1_over_1_plus_t_metric",
  "level": "2",
  "url": "sec_metric_space_exer.html#ex_1_over_1_plus_t_metric",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be defined by . Show that is a metric on . (Hint: For the triangle inequality, note that where , and is an increasing function.)  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-39",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let be a metric space and be a constant. Define by . Under what, if any, conditions is a metric on . Justify your answer.  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-40",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " A real valued function on an interval is concave if for all and all and in the interval. Note that the expression is linear in and is equal to when and when . So is a parameterization of the line segment joining to . As indicates, equation implies that the graph of a concave function on any interval lies above the secant line joining the points and .   A concave function.     Let map to with the standard Euclidean metric. Show that is concave on the interval .   Start with the fact that .   Show that if is a concave function on and , an interval and and are in the interval, then .   Consider with . Then use the fact that is in .   Suppose is a metric space and is an increasing, concave function such that if and only if . Prove that is a metric on .  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec_metric_space_exer.html#exercise-41",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   The function defined by is a metric on .   Every nonempty set can be made into a metric space.   It is possible to define an infinite number of metrics on every set containing at least two elements.   Let and be metric spaces with . Then the function defined by is a metric on .   Let be a metric space. If is infinite, then the range of is also an infinite set.  "
},
{
  "id": "sec_met_space_app",
  "level": "1",
  "url": "sec_met_space_app.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  In this section we explore two applications of metric spaces.  "
},
{
  "id": "sec_hamming",
  "level": "1",
  "url": "sec_hamming.html",
  "type": "Section",
  "number": "",
  "title": "The Hamming Metric",
  "body": " The Hamming Metric  In our society, a great deal of information is communicated electronically. Bank transactions, television programs, military communications, cell phone calls, digital images, and almost any interchange one can think of either can be or is digitized and transmitted electronically. In many situations we need to compare one set of data to another (e.g., Internet searches for text strings or image matches, DNA strands), and metrics are often used for this purpose. Computers work in a binary system, that is they recognize only zeros and ones. So a digital text message is a string of zeros and ones. That is, a digital message is a collection of elements in the space for some positive integer , where . Each element in is called a word - that is, a word is an element in denoted in the form . Just like in the English language, where not every combination of letters corresponds to words that make sense, not every word is recognizable as part of an intelligible message. We might, for example, code the letters of the alphabet by assigning numbers 1-26 to the letters, then make them elements of by converting to binary. The collection of all intelligible words is called a code . So a code is just some subset of that all parties agree are sensible words. The words in a code are called code words . To deal with problems that occur in transmitting digital messages, like scrambling ( encoding ) messages, unscrambling ( decoding ) messages, and detecting and correcting errors in messages, it is useful to have a way to measure distance between words. One way is to use the Hamming metric.   metric Hamming   Let and be words in . The Hamming distance  between and is .    Recall that for each both and are either 0 or 1. So   In other words, counts the number of components at which and are different.    Explain why is a metric.    Suppose we create a code in , where That is, the words , , , , , , , are the only words that can comprise a message. Find .    Suppose we are on the receiving end of the message .   How do we know that an error has occurred in transmission of the message we received?   To correct the errors in this received message, we replace the incorrect words with the code word(s) in closest to them. Correct this message. (Note that there may be more than one possible substitution. Find all of the possibilities.)    "
},
{
  "id": "p-552",
  "level": "2",
  "url": "sec_hamming.html#p-552",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "word code code words encoding decoding "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "sec_hamming.html#definition-12",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": " metric Hamming   Let and be words in . The Hamming distance  between and is .   "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "sec_hamming.html#activity-19",
  "type": "Activity",
  "number": "4.1",
  "title": "",
  "body": "  Explain why is a metric.    Suppose we create a code in , where That is, the words , , , , , , , are the only words that can comprise a message. Find .    Suppose we are on the receiving end of the message .   How do we know that an error has occurred in transmission of the message we received?   To correct the errors in this received message, we replace the incorrect words with the code word(s) in closest to them. Correct this message. (Note that there may be more than one possible substitution. Find all of the possibilities.)   "
},
{
  "id": "sec_levenshtein",
  "level": "1",
  "url": "sec_levenshtein.html",
  "type": "Section",
  "number": "",
  "title": "The Levenshtein Metric",
  "body": " The Levenshtein Metric  The Levenshtein metric is one measure of distance that researchers use to understand DNA. DNA is composed of double chains of nucleotides, which wind together to form a double helix. The nucleotides come in four types: adenine (A), cytosine (C), guanine (G), and thymine (T). The nucleotides in the two chains of a DNA strand pair together, (A with T, and C with G), so the nucleotides in one chain determine the nucleotides in the other. Therefore, we can represent a DNA strand with a string of letters from the alphabet . One problem DNA researchers have is how to compare two strands of DNA, and the Levenshtein metric is one way that the distance between strands can be measured. Other metrics could be used, but the Levenshtein metric is appropriate to the task for several reasons. During evolution, changes in DNA sequences arise due to nucleotide substitution, or the insertion or deletion of nucleotides. These evolutionary changes can be modeled by the operations that determine the Levenshtein distance better than other metrics. In addition, the Levenshtein metric can be used to calculate distances between strings of different lengths. The Levenshtein metric also has applications in spell checkers, speech recognition, and automated plagiarism detection. To understand how the Levenshtein metric is calculated, consider the question of how far apart the words green and grease are.  To compare these words, we have to be able to change letters, and add or delete letters. If is a string of letters, we allow the following operations:   a deletion:  replace with for some ,    an insertion:  replace with , where is an allowable letter and ,    a substitution:  replace with , where is an allowable letter and .       Using the allowable operations, change the word green into the word grease . Specifically identify each operation you use. (Note: the intermediate strings of letters do not have to form recognizable words.) How many operations did you use?    If it took three operations to transform green into grease , we could say that the distance between green and grease is at most 3. However, it may be possible to transform green into grease in fewer than 3 operations, which might change our opinion of the distance between these words. In general, to define the Levenshtein distance between a sting and a string , let denote the number of deletions, the number of insertions, and the number of substitutions we use to get from to . There may be many different combinations of , , and that get us from to , so we want the smallest number.  metric Levenshtein   The Levenshtein distance  between strings and is .   Prove that the Levenshtein distance function is really a metric on the set of all possible words (sensical or nonsensical).    A spell checker corrects the misspelled word tupotagry . Using the Levenshtein metric, which word would the spell checker use as the closest to tupotagry ? Why?     "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "sec_levenshtein.html#activity-20",
  "type": "Activity",
  "number": "4.2",
  "title": "",
  "body": "  Using the allowable operations, change the word green into the word grease . Specifically identify each operation you use. (Note: the intermediate strings of letters do not have to form recognizable words.) How many operations did you use?    If it took three operations to transform green into grease , we could say that the distance between green and grease is at most 3. However, it may be possible to transform green into grease in fewer than 3 operations, which might change our opinion of the distance between these words. In general, to define the Levenshtein distance between a sting and a string , let denote the number of deletions, the number of insertions, and the number of substitutions we use to get from to . There may be many different combinations of , , and that get us from to , so we want the smallest number.  metric Levenshtein   The Levenshtein distance  between strings and is .   Prove that the Levenshtein distance function is really a metric on the set of all possible words (sensical or nonsensical).    A spell checker corrects the misspelled word tupotagry . Using the Levenshtein metric, which word would the spell checker use as the closest to tupotagry ? Why?    "
},
{
  "id": "sec_glb_intro",
  "level": "1",
  "url": "sec_glb_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  The real numbers have a special property that allows us to, among other things, define the distance between a point and a set in a metric space. It also allows us to define distances between subsets of certain types of metric spaces, which creates a whole new metric space whose elements are the subsets of the metric space. We will examine that property of the real numbers in this activity.  We begin by considering the problem of defining the distance between a real number and an interval in with the Euclidean metric defined by .  Let and let be the closed interval . It is natural to suggest that the distance between the point and the set , denoted , should be the distance from the point to the point in closest to . So in this case we would say .  This might lead us to suggest that the distance from a point to a set , denoted by is the minimum distance from the point to any point in the set, or .  What if we changed the set to be the open interval ? What then should be, or should this distance even exist? If we think of the distance between a point and a set as measuring how far we have to travel from the point until we reach the set, then in the case of and , as soon as we travel a distance more than 1 from in the direction of , we reach the set . So we might intuitively say that as well. But we cannot define this distance as a distance from to a point in since . We need a different way to formulate the notion of a distance from a point to a set.  In a case like this, with and , we can examine the set and notice some facts about this set. For example, the set is a subset of the nonnegative real numbers. Also, in this example there are no numbers in that are smaller than 1. Because of this property, we will call the number 1 a lower bound for . More generally,   lower bound   Let be a nonempty subset of . A lower bound for is a real number such that for all .    If a subset of has a lower bound, we say that is bounded below . So the set is bounded below by 1. The set is also bounded below by 0.5 and 0. In fact, any number less than 1 is a lower bound for . The critical idea, though, is that no number larger than 1 is a lower bound for . Because of this we call 1 a greatest lower bound of . More generally,   greatest lower bound   Let be a nonempty subset of that is bounded below. A greatest lower bound for is a real number such that    is a lower bound for and    if is a lower bound for , then .        infimum A greatest lower bound is also called an infimum . We might now use this idea of a greatest lower bound to define the distance between and as the greatest lower bound of the set . However, there are questions we need to address before we can do so. One question is whether or not every nonempty subset of that is bounded below has an infimum. The answer to this question is yes, and we will take this result as an axiom of the real number system (often called the completeness axiom ).    Does every subset of have a lower bound? Explain. (When a subset of has a lower bound we say that the set is bounded below .)    Which of the following subsets of are bounded below? If the set is bounded below, what is its infimum?                How would you define a least upper bound of a subset of ?    "
},
{
  "id": "p-578",
  "level": "2",
  "url": "sec_glb_intro.html#p-578",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower bound "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "sec_glb_intro.html#definition-14",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": " lower bound   Let be a nonempty subset of . A lower bound for is a real number such that for all .   "
},
{
  "id": "p-580",
  "level": "2",
  "url": "sec_glb_intro.html#p-580",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded below greatest lower bound "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "sec_glb_intro.html#definition-15",
  "type": "Definition",
  "number": "5.2",
  "title": "",
  "body": " greatest lower bound   Let be a nonempty subset of that is bounded below. A greatest lower bound for is a real number such that    is a lower bound for and    if is a lower bound for , then .      "
},
{
  "id": "p-584",
  "level": "2",
  "url": "sec_glb_intro.html#p-584",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infimum completeness axiom "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "sec_glb_intro.html#exploration-4",
  "type": "Preview Activity",
  "number": "5.1",
  "title": "",
  "body": "  Does every subset of have a lower bound? Explain. (When a subset of has a lower bound we say that the set is bounded below .)    Which of the following subsets of are bounded below? If the set is bounded below, what is its infimum?                How would you define a least upper bound of a subset of ?   "
},
{
  "id": "sec_dist_point_set",
  "level": "1",
  "url": "sec_dist_point_set.html",
  "type": "Section",
  "number": "",
  "title": "The Distance from a Point to a Set",
  "body": " The Distance from a Point to a Set  Metrics are used to establish separation between objects. Topological spaces can be placed into different categories based on how well certain types of sets can be separated. We have defined metrics as measuring distances between points in a metric space, and in this activity we extend that idea to measure the distance between a point and a subset in a metric space. However, there are two questions we need to address before we can do so. The first we mentioned in our preview activity. We will assume the completeness axiom of the reals, that is that any subset of that is bounded below always has a greatest lower bound. The second question is whether or not a greatest lower bound is unique.    Let be a subset of that is bounded below, and assume that has a greatest lower bound. In this activity we will show that the infimum of is unique.    What method can we use to prove that there is only one greatest lower bound for ?    Suppose and are both greatest lower bounds for . Why are and both lower bounds for ?    What two things does the second property of a greatest lower bound tell us about the relationship between and ?    Why must the greatest lower bound of be unique?    With the existence and uniqueness of greatest lower bounds considered, we can now say that any nonempty subset of that is bounded below has a unique greatest lower bound. We use the notation (or for infimum of ) for the greatest lower bound of . There is also a least upper bound  least upper bound ( , or for supremum  supremum ) of a subset of that is bounded above.  Now we can formally define the distance between a point and a subset in a metric space.    Let be a metric space, let , and let be a nonempty subset of . The distance from to is .    We denote the distance from to by . When calculating these distances, it must be understood what the underlying metric is.    There are a couple of facts about the distance between a point and a set that we examine in this activity. Let be a metric space, let , and let be a nonempty subset of     Why must exist?    If , must ?    "
},
{
  "id": "p-591",
  "level": "2",
  "url": "sec_dist_point_set.html#p-591",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "completeness axiom "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "sec_dist_point_set.html#activity-21",
  "type": "Activity",
  "number": "5.2",
  "title": "",
  "body": "  Let be a subset of that is bounded below, and assume that has a greatest lower bound. In this activity we will show that the infimum of is unique.    What method can we use to prove that there is only one greatest lower bound for ?    Suppose and are both greatest lower bounds for . Why are and both lower bounds for ?    What two things does the second property of a greatest lower bound tell us about the relationship between and ?    Why must the greatest lower bound of be unique?   "
},
{
  "id": "p-597",
  "level": "2",
  "url": "sec_dist_point_set.html#p-597",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infimum least upper bound supremum "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "sec_dist_point_set.html#definition-16",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "  Let be a metric space, let , and let be a nonempty subset of . The distance from to is .   "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "sec_dist_point_set.html#activity-22",
  "type": "Activity",
  "number": "5.3",
  "title": "",
  "body": "  There are a couple of facts about the distance between a point and a set that we examine in this activity. Let be a metric space, let , and let be a nonempty subset of     Why must exist?    If , must ?   "
},
{
  "id": "sec_glb_summ",
  "level": "1",
  "url": "sec_glb_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A lower bound or a nonempty subset of that is bounded below is a real number such that for all . A greatest lower bound (or infimum) for a nonempty subset of that is bounded below is a real number such that    is a lower bound for and    if is a lower bound for , then .       An upper bound for a nonempty subset of that is bounded above is a real number such that for all . A least upper bound (or supremum) for a nonempty subset of that is bounded above is a real number such that    is an upper bound for and    if is an upper bound for , then .       The distance from a point to a set in a metric space is . There may be no point such that , so it is necessary to use an infimum to define this distance.     "
},
{
  "id": "sec_glb_exer",
  "level": "1",
  "url": "sec_glb_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let be a nonempty subset of that is bounded below. Let , and define to be .   Explain why is a lower bound for . Explain why has an infimum.   Let be a lower bound for . Show that . Then explain why .    Let be a nonempty subset of .   Assume that is bounded above, and let . Show that for every , there is a number such that .   Assume that is bounded below, and let . Show that for every , there is a number such that .    Let and be nonempty subsets of that are bounded above and below. Let .   Follow the steps below to show that .   Let and . Show that is an upper bound for .   The previous part shows that is bounded above and so has a supremum. Let . Explain why .   To show that we have to prove that cannot be strictly less than . Suppose to the contrary that . Let . Use the result of to arrive at a contradiction.   Prove that .   Prove or disprove:    Prove or disprove:     Let , the set of continuous functions from to on an interval . Define by .   What is on ?   Prove that is a metric on . Describe in geometric terms how this metric measures the distance between functions and . (This metric is called the supremum metric or the uniform metric on .)    In this exercise we prove the Archimedean property of the natural numbers. Note that the set of natural numbers, denoted or , is the set of all positive integers.  The Archimedean Property  Archimedean property   Given any real number , there exists a natural number such that .   Let be a real number.   Suppose that there is no positive integer such that . Explain how we can conclude that is bounded above.   Assuming that is bounded above, explain why must have a least upper bound .   Explain why cannot be a least upper bound for . Explain why this proves the Archimedean property.    In this exercise we prove two statements that are equivalent to the Archimedean property (see ). One of the statements is the following theorem:   Given real numbers and with , there exists a natural number such that .      Let and be real numbers with .   Show that if the Archimedean property is true, then so is .   Show that if is true, then so is the Archimedean property. Conclude that is equivalent to the Archimedean property.   A second statement that is equivalent to the Archimedean property is the following.   If is a positive real number, then there exists a positive integer such that .   Prove that is equivalent to the Archimedean property.    We can use greatest lower bounds to prove the following theorem.   Given any two distinct real numbers and , there is a rational number that lies between them.   This theorem tells us an important fact that the rational numbers are what is called dense in the set of real numbers. We prove this theorem in this exercise. Let and be real numbers and assume . By the Archimedean property of the natural numbers (see Exercises and ), there is a positive integer such that . Let .   Show that is bounded below in .   Explain why contains an integer such that if with , then . It may be helpful to use the Well-Ordering Principle that states   Every subset of the integers that is bounded below contains its infimum.   (The Well-Ordering Principle is one of many axioms that are equivalent to the Principle of Mathematical Induction. These principles are taken as axioms and are assumed to be true.)   Explain why and . Use these inequalities, along with , to show that . Then find a rational number that is strictly between and .    Show that every open ball in contains a point with both and rational.    We are familiar with solving the quadratic equation to obtain the solutions . But do we really know that the number exists? We address that question in this exercise and demonstrate the existence of the number using the greatest lower bound.   To begin, let . Explain why must have a greatest lower bound .   In what follows we demonstrate that , which makes . We consider the cases and .   Suppose . Show that there is a positive integer such that . Explain why this also cannot happen.   Suppose . Show that there is a positive integer such that . Explain why this also cannot happen.   Explain how we have demonstrated the existence of .    Similar to we can prove the following theorem.   Given any two distinct real numbers and , there is an irrational number that lies between them.      The first step is to demonstrate the existence of an irrational number. We will do that by proving that is irrational. Proceed by contradiction and assume that is a rational number. That is, for some positive integers and such that and have no positive common factors other than 1.   Explain why . Since is prime, it follows that divides .   Show that divides . Explain how this proves that is an irrational number.   Let and be distinct real numbers. Show that there exists an integer and a positive integer such that is an irrational number between and .   Consider the approach in .    Let be a metric space and a nonempty subset of . For , prove that .    Prove that if is a metric space and and are nonempty subsets of , then for every .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. Throughout, let and be bounded subsets of (a subset of is bounded if it is both bounded above and bounded below).   Any nonempty subset of is bounded.   If , then .   Let , then .   If is a nonempty subset of , then .   If is a nonempty subset of , then .   If is a subset of and with , then .   "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-42",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let be a nonempty subset of that is bounded below. Let , and define to be .   Explain why is a lower bound for . Explain why has an infimum.   Let be a lower bound for . Show that . Then explain why .  "
},
{
  "id": "ex_GLB_between",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_between",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a nonempty subset of .   Assume that is bounded above, and let . Show that for every , there is a number such that .   Assume that is bounded below, and let . Show that for every , there is a number such that .  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-44",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be nonempty subsets of that are bounded above and below. Let .   Follow the steps below to show that .   Let and . Show that is an upper bound for .   The previous part shows that is bounded above and so has a supremum. Let . Explain why .   To show that we have to prove that cannot be strictly less than . Suppose to the contrary that . Let . Use the result of to arrive at a contradiction.   Prove that .   Prove or disprove:    Prove or disprove:   "
},
{
  "id": "ex_GLB_function_sup_metric",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_function_sup_metric",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let , the set of continuous functions from to on an interval . Define by .   What is on ?   Prove that is a metric on . Describe in geometric terms how this metric measures the distance between functions and . (This metric is called the supremum metric or the uniform metric on .)  "
},
{
  "id": "ex_GLB_Archimedean",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_Archimedean",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " In this exercise we prove the Archimedean property of the natural numbers. Note that the set of natural numbers, denoted or , is the set of all positive integers.  The Archimedean Property  Archimedean property   Given any real number , there exists a natural number such that .   Let be a real number.   Suppose that there is no positive integer such that . Explain how we can conclude that is bounded above.   Assuming that is bounded above, explain why must have a least upper bound .   Explain why cannot be a least upper bound for . Explain why this proves the Archimedean property.  "
},
{
  "id": "ex_GLB_Archimedean_2",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_Archimedean_2",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " In this exercise we prove two statements that are equivalent to the Archimedean property (see ). One of the statements is the following theorem:   Given real numbers and with , there exists a natural number such that .      Let and be real numbers with .   Show that if the Archimedean property is true, then so is .   Show that if is true, then so is the Archimedean property. Conclude that is equivalent to the Archimedean property.   A second statement that is equivalent to the Archimedean property is the following.   If is a positive real number, then there exists a positive integer such that .   Prove that is equivalent to the Archimedean property.  "
},
{
  "id": "ex_GLB_rational",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_rational",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " We can use greatest lower bounds to prove the following theorem.   Given any two distinct real numbers and , there is a rational number that lies between them.   This theorem tells us an important fact that the rational numbers are what is called dense in the set of real numbers. We prove this theorem in this exercise. Let and be real numbers and assume . By the Archimedean property of the natural numbers (see Exercises and ), there is a positive integer such that . Let .   Show that is bounded below in .   Explain why contains an integer such that if with , then . It may be helpful to use the Well-Ordering Principle that states   Every subset of the integers that is bounded below contains its infimum.   (The Well-Ordering Principle is one of many axioms that are equivalent to the Principle of Mathematical Induction. These principles are taken as axioms and are assumed to be true.)   Explain why and . Use these inequalities, along with , to show that . Then find a rational number that is strictly between and .  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-49",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Show that every open ball in contains a point with both and rational.  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-50",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " We are familiar with solving the quadratic equation to obtain the solutions . But do we really know that the number exists? We address that question in this exercise and demonstrate the existence of the number using the greatest lower bound.   To begin, let . Explain why must have a greatest lower bound .   In what follows we demonstrate that , which makes . We consider the cases and .   Suppose . Show that there is a positive integer such that . Explain why this also cannot happen.   Suppose . Show that there is a positive integer such that . Explain why this also cannot happen.   Explain how we have demonstrated the existence of .  "
},
{
  "id": "ex_GLB_irrational",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_irrational",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Similar to we can prove the following theorem.   Given any two distinct real numbers and , there is an irrational number that lies between them.      The first step is to demonstrate the existence of an irrational number. We will do that by proving that is irrational. Proceed by contradiction and assume that is a rational number. That is, for some positive integers and such that and have no positive common factors other than 1.   Explain why . Since is prime, it follows that divides .   Show that divides . Explain how this proves that is an irrational number.   Let and be distinct real numbers. Show that there exists an integer and a positive integer such that is an irrational number between and .   Consider the approach in .  "
},
{
  "id": "ex_GLB_triangle",
  "level": "2",
  "url": "sec_glb_exer.html#ex_GLB_triangle",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be a metric space and a nonempty subset of . For , prove that .  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-53",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Prove that if is a metric space and and are nonempty subsets of , then for every .  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec_glb_exer.html#exercise-54",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. Throughout, let and be bounded subsets of (a subset of is bounded if it is both bounded above and bounded below).   Any nonempty subset of is bounded.   If , then .   Let , then .   If is a nonempty subset of , then .   If is a nonempty subset of , then .   If is a subset of and with , then .  "
},
{
  "id": "sec_cont_func_intro",
  "level": "1",
  "url": "sec_cont_func_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We have likely had previous experiences with continuous functions. Continuity is an important consideration in optimization problems because a continuous function attains a maximum value and a minimum value on any closed and bounded interval. Continuous functions also satisfy the Intermediate Value Theorem, that a continuous function takes on all values between and on an interval . An important consequence of the Intermediate Value Theorem is that if is a continuous function on an interval and and have opposite signs, then must have a root in the interval . In this section we will begin to explore continuity of functions between metric spaces. Our ultimate goal in future sections is to understand continuous functions well enough that we can define continuity just in terms of open sets.  In calculus we discuss the idea of continuity. A function (using the standard Euclidean metric) is continuous at a point if .  This involved providing some explanation about what it means for a function to have a limit at a point. Intuitively, the idea is that a function has a limit at if we can make all of the value of as close to as we want by choosing as close to (but not equal to) as we need. To extend this informal notion of limit to continuity at a point we would say that a function is continuous at a point if if we can make all of the value of as close to as we want by choosing as close to as we need (now can equal ).  In order to define continuity in a more general context (in topological spaces) we will need to have a rigorous definition of continuity to work with. We will begin by discussing continuous functions from to , and build from that to continuous functions in metric spaces. These ideas will allow us to ultimately define continuous functions in topological spaces.  We begin by working with continuous functions from to . Our goal is to make more rigorous our informal definition of continuity at a point. To do so will require us to formally defining what we mean by   making the values of  as close to as we want , and    choosing  as close to as we need .      Demonstrating the definition of continuity at a point.       Let's deal with the first statement, making the values of  as close to as we want . What this means is that if we set any tolerance, say , then we can make the values of within of . Since the absolute value measures how close is to , we can rewrite the statement that the values of are within of as . Of course, may not be as close as we want to , so we need a way to indicate that we can make the values of arbitrarily close to  within any tolerance at all. We do this by making the tolerance a parameter, . Then our job is to make the values of within of regardless of the size of . We write this as .  We can picture this as shown at left in . Here we want to make the values of lie within an band of above and below . That is, we want to be able to make the values of lie between and .  Now we have to address the question of how we make the values of to be within of . Since the values are the dependent values, dependent on , we make the values of have the property we want by choosing the inputs appropriately. In order for to be continuous at , we must be able to find values close enough to to force . Pictorially, we can see how this might happen in the image at right in . We need to be able to find an interval around so that the graph of lies in the band around for values of in that interval. In other words, we need to be able to find some positive number so that if is in the interval , then the graph of lies in the band around . More formally, if we are given any positive tolerance , we must be able to find a positive number so that if (that is, is in the interval ), then (or lies in the band around ).  This gives us a rigorous definition of what it means for a function to be continuous at a point.    A function is continuous at a point if, given any , there exists a so that implies .    Note that the value of can depend on the value of and on , but not on values of .    The GeoGebra file online will allow us to play around with this definition. Use this GeoGebra applet for the first two problems in this activity.    Enter as your function. (You can change the viewing window coordinates, the base point , and the function using the input boxes at the left on the screen.) Determine a value of so that whenever . Explain your method.    Now find a value of so that whenever . Explain your method.    What is the negation of the definition of continuity at a point? In other words, what do we need to do to show that a function is not continuous at a point ?   Use the negation of the definition to explain why the function defined by is not continuous at .    "
},
{
  "id": "F_Continuity",
  "level": "2",
  "url": "sec_cont_func_intro.html#F_Continuity",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " Demonstrating the definition of continuity at a point.      "
},
{
  "id": "def_epsilon_delta_continuity",
  "level": "2",
  "url": "sec_cont_func_intro.html#def_epsilon_delta_continuity",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": "  A function is continuous at a point if, given any , there exists a so that implies .   "
},
{
  "id": "pa_MS_continuity",
  "level": "2",
  "url": "sec_cont_func_intro.html#pa_MS_continuity",
  "type": "Preview Activity",
  "number": "6.1",
  "title": "",
  "body": "  The GeoGebra file online will allow us to play around with this definition. Use this GeoGebra applet for the first two problems in this activity.    Enter as your function. (You can change the viewing window coordinates, the base point , and the function using the input boxes at the left on the screen.) Determine a value of so that whenever . Explain your method.    Now find a value of so that whenever . Explain your method.    What is the negation of the definition of continuity at a point? In other words, what do we need to do to show that a function is not continuous at a point ?   Use the negation of the definition to explain why the function defined by is not continuous at .   "
},
{
  "id": "sec_cont_func_btwn",
  "level": "1",
  "url": "sec_cont_func_btwn.html",
  "type": "Section",
  "number": "",
  "title": "Continuous Functions Between Metric Spaces",
  "body": " Continuous Functions Between Metric Spaces  In our preview activity we saw how to formally define what it means for a function to be continuous at a point.  Note that depends only on being able to measure how close points are to each other. Since that is precisely what a metric does, we can extend this notion of continuity to define continuity for functions between metric spaces. Continuity is an important idea in topology, and we will work with this idea extensively throughout the semester.  If we let be defined by , then we have seen that is a metric on (note that is the Euclidean metric on ). Using this metric we can reformulate what it means for a function to be continuous at a point.   Alternate Definition   A function is continuous at a point if, given any , there exists a so that implies .    This alternate definition depends on the metric . We could easily replace the metric with any other metric we choose. This allows us to define continuity at a point for functions between metric spaces.   continuity at a point in a metric space   Let and be metric spaces. A function is continuous at if, given any , there exists a so that implies .    Once we have defined continuity at a point, we can define continuous functions.   continuous function   Let and be metric spaces. A function is continuous if is continuous at every point in .      In general, to prove that a function is continuous, where and are metric spaces, we begin by choosing an arbitrary element in . Then we let be a number greater than and show that there is a so that whenever . The we need cannot depend on (since isn't known), but can depend on the value of that we choose, and will likely depend on as well. That is, there is a function of only the independent variables and that produces the , or . As an example, let and let be defined as .  The proof that is a metric is left for . Consider defined by , where . To show that is continuous, we let and let .    Scratch work. What happens next is not part of the proof, but shows how we go about finding a we need. We are looking for such that implies that . That is, we want to make whenever . Now . If , then . If we choose , then implies that and so . Now . It follows that . To make this product less that , we can choose such that or . That is, there is a function of that gives us the we want, namely . Now we ignore this paragraph and present the proof, which is essentially reversing the steps we just made. If the steps can't be reversed, then we have to rethink our argument. The next step in the proof might seem like magic to the uninitiated reader, but we have seen behind the curtain so it isn't a mystery to us.   Let be a positive number less than . Then implies that and so . Then .  It follows that .  We conclude that is continuous at every point in and so is a continuous function.    Not all functions are continuous as we see in the next example.    Let and define by . Let be the Euclidean metric and the discrete metric. (Recall that whenever .) Let and let .  Let , and let . Then and . However, .  So if , there is no such that implies that . We conclude that is continuous at no point in .    Certain functions are always continuous, as the next activity shows.    Let and be metric spaces, and let . Define by for every . Show that is a continuous function.    Let be a metric space. Define the function by for every . Show that is a continuous function. (The function is called the identity function  identity function on .)    Why doesn't the argument in part (b) contradict ?    More complicated examples are in the next activity.    Let and , where is the taxicab metric and is the max metric. Define by .    Is a continuous function from to ? Justify your answer.    Is a continuous function from to ? Justify your answer.    "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "sec_cont_func_btwn.html#definition-18",
  "type": "Definition",
  "number": "6.3",
  "title": "Alternate Definition.",
  "body": " Alternate Definition   A function is continuous at a point if, given any , there exists a so that implies .   "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "sec_cont_func_btwn.html#definition-19",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": " continuity at a point in a metric space   Let and be metric spaces. A function is continuous at if, given any , there exists a so that implies .   "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "sec_cont_func_btwn.html#definition-20",
  "type": "Definition",
  "number": "6.5",
  "title": "",
  "body": " continuous function   Let and be metric spaces. A function is continuous if is continuous at every point in .   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_cont_func_btwn.html#example-3",
  "type": "Example",
  "number": "6.6",
  "title": "",
  "body": "  In general, to prove that a function is continuous, where and are metric spaces, we begin by choosing an arbitrary element in . Then we let be a number greater than and show that there is a so that whenever . The we need cannot depend on (since isn't known), but can depend on the value of that we choose, and will likely depend on as well. That is, there is a function of only the independent variables and that produces the , or . As an example, let and let be defined as .  The proof that is a metric is left for . Consider defined by , where . To show that is continuous, we let and let .    Scratch work. What happens next is not part of the proof, but shows how we go about finding a we need. We are looking for such that implies that . That is, we want to make whenever . Now . If , then . If we choose , then implies that and so . Now . It follows that . To make this product less that , we can choose such that or . That is, there is a function of that gives us the we want, namely . Now we ignore this paragraph and present the proof, which is essentially reversing the steps we just made. If the steps can't be reversed, then we have to rethink our argument. The next step in the proof might seem like magic to the uninitiated reader, but we have seen behind the curtain so it isn't a mystery to us.   Let be a positive number less than . Then implies that and so . Then .  It follows that .  We conclude that is continuous at every point in and so is a continuous function.   "
},
{
  "id": "exp_not_continuous",
  "level": "2",
  "url": "sec_cont_func_btwn.html#exp_not_continuous",
  "type": "Example",
  "number": "6.7",
  "title": "",
  "body": "  Let and define by . Let be the Euclidean metric and the discrete metric. (Recall that whenever .) Let and let .  Let , and let . Then and . However, .  So if , there is no such that implies that . We conclude that is continuous at no point in .   "
},
{
  "id": "act_id_constant_continuous",
  "level": "2",
  "url": "sec_cont_func_btwn.html#act_id_constant_continuous",
  "type": "Activity",
  "number": "6.2",
  "title": "",
  "body": "  Let and be metric spaces, and let . Define by for every . Show that is a continuous function.    Let be a metric space. Define the function by for every . Show that is a continuous function. (The function is called the identity function  identity function on .)    Why doesn't the argument in part (b) contradict ?   "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "sec_cont_func_btwn.html#activity-24",
  "type": "Activity",
  "number": "6.3",
  "title": "",
  "body": "  Let and , where is the taxicab metric and is the max metric. Define by .    Is a continuous function from to ? Justify your answer.    Is a continuous function from to ? Justify your answer.   "
},
{
  "id": "sec_comp_cont_func",
  "level": "1",
  "url": "sec_comp_cont_func.html",
  "type": "Section",
  "number": "",
  "title": "Composites of Continuous Functions",
  "body": " Composites of Continuous Functions  Let , , and be metric spaces, and suppose and are continuous functions. It seems natural to ask if the composite is a continuous function.    Let , , and be metric spaces, and suppose and are continuous functions. We will prove that is a continuous function.    What do we have to do to show that is a continuous function? What are the first two steps in our proof?    Let and let . Suppose is given. Explain why there must exist a so that implies .    Now explain why there exists a so that implies that .    Prove that is a continuous function.    Continuity is an important concept in topology. We have seen how to define continuity in metric spaces, and we will soon expand on this idea to define continuity without reference to metrics at all. This will allow us to later define continuous functions between arbitrary topological spaces.  "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "sec_comp_cont_func.html#activity-25",
  "type": "Activity",
  "number": "6.4",
  "title": "",
  "body": "  Let , , and be metric spaces, and suppose and are continuous functions. We will prove that is a continuous function.    What do we have to do to show that is a continuous function? What are the first two steps in our proof?    Let and let . Suppose is given. Explain why there must exist a so that implies .    Now explain why there exists a so that implies that .    Prove that is a continuous function.   "
},
{
  "id": "sec_cont_func_summ",
  "level": "1",
  "url": "sec_cont_func_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   Let and be metric spaces. A function is continuous at if, given any , there exists a so that implies .    Let and be metric spaces. A function is continuous if is continuous at every point in .     "
},
{
  "id": "sec_cont_func_exer",
  "level": "1",
  "url": "sec_cont_func_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let be defined by , with the Euclidean metric on both the domain and the codomain. Is continuous at ? Prove your answer.    Let be defined by Is continuous at ? Prove your answer.    Let , where is the Euclidean metric.   Let . Prove or disprove: the function defined by is continuous.   Let where is the max metric. Prove or disprove: the function defined by is continuous.    Let be any set and define by  asks us to show that is a metric (the discrete metric) on . Let and be metric spaces with the discrete metric. Determine all of the continuous functions from to .    Let and be continuous functions from to .   Let with and define by for all . Show that is a continuous function.   Define by for all . Show that is a continuous function.    Let and be continuous functions from to . In this exercise we will prove that is a continuous function from to . Let be in , and follow the steps below to show that is continuous at . Let be a positive number.   We will first want to express in a more useful way. Use the fact that and to show that .   Explain why there exist positive numbers , , , and such that .   Use the results of (a) and (b) to show that is continuous at . (Hint: .)    Let and be functions from to .   Is it true that if is a continuous function, then and are continuous functions? Verify your answer.   Is it true that if is a continuous function, then and are continuous functions? Verify your answer.    Let map from to , with both the domain and codomain having the Euclidean metric.   Let . Find a value of such that implies that . You might use the applet at to confirm your value of .   Prove that is continuous at .    Define as . Prove that is a metric.    Let be a continuous function, with both copies of having the Euclidean metric. Assume that whenever is rational. Prove that for every .   Use .    Let be defined by if is irrational and if is rational. Assume the Euclidean metric on both copies of . Show that is not continuous at any point in .   Use and .    Let be defined by if is irrational and if is rational. Assume the Euclidean metric on both copies of . Show that is continuous only at .    Let be the set of continuous functions . Let be the distance function on defined by , for . For each , set .   Determine the value of when , , and .   Determine the value of if and .   Prove that the function is continuous, where is the Euclidean metric.   It helps to start by explicitly writing down what it means for to be continuous in terms of the metrics and before trying to prove this statement.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Let be a function, where and are metric spaces. If is the discrete metric and is any metric, then is continuous.   Let be a function, where and are metric spaces. If is the discrete metric and is any metric, then is continuous.   Let and be two metrics on a set . The identity function defined by for every is continuous.   Let and be continuous functions from (the taxicab metric) to . Then the function from to defined by for every is a continuous function.   If and are metric spaces with , then the constant function defined by for every is a continuous function.   "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-55",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let be defined by , with the Euclidean metric on both the domain and the codomain. Is continuous at ? Prove your answer.  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-56",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be defined by Is continuous at ? Prove your answer.  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-57",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let , where is the Euclidean metric.   Let . Prove or disprove: the function defined by is continuous.   Let where is the max metric. Prove or disprove: the function defined by is continuous.  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-58",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be any set and define by  asks us to show that is a metric (the discrete metric) on . Let and be metric spaces with the discrete metric. Determine all of the continuous functions from to .  "
},
{
  "id": "ex_sum_continuous",
  "level": "2",
  "url": "sec_cont_func_exer.html#ex_sum_continuous",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let and be continuous functions from to .   Let with and define by for all . Show that is a continuous function.   Define by for all . Show that is a continuous function.  "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-60",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let and be continuous functions from to . In this exercise we will prove that is a continuous function from to . Let be in , and follow the steps below to show that is continuous at . Let be a positive number.   We will first want to express in a more useful way. Use the fact that and to show that .   Explain why there exist positive numbers , , , and such that .   Use the results of (a) and (b) to show that is continuous at . (Hint: .)  "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-61",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let and be functions from to .   Is it true that if is a continuous function, then and are continuous functions? Verify your answer.   Is it true that if is a continuous function, then and are continuous functions? Verify your answer.  "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-62",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let map from to , with both the domain and codomain having the Euclidean metric.   Let . Find a value of such that implies that . You might use the applet at to confirm your value of .   Prove that is continuous at .  "
},
{
  "id": "ex_min_1_metric",
  "level": "2",
  "url": "sec_cont_func_exer.html#ex_min_1_metric",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Define as . Prove that is a metric.  "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-64",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let be a continuous function, with both copies of having the Euclidean metric. Assume that whenever is rational. Prove that for every .   Use .  "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-65",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be defined by if is irrational and if is rational. Assume the Euclidean metric on both copies of . Show that is not continuous at any point in .   Use and .  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-66",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let be defined by if is irrational and if is rational. Assume the Euclidean metric on both copies of . Show that is continuous only at .  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-67",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let be the set of continuous functions . Let be the distance function on defined by , for . For each , set .   Determine the value of when , , and .   Determine the value of if and .   Prove that the function is continuous, where is the Euclidean metric.   It helps to start by explicitly writing down what it means for to be continuous in terms of the metrics and before trying to prove this statement.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec_cont_func_exer.html#exercise-68",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Let be a function, where and are metric spaces. If is the discrete metric and is any metric, then is continuous.   Let be a function, where and are metric spaces. If is the discrete metric and is any metric, then is continuous.   Let and be two metrics on a set . The identity function defined by for every is continuous.   Let and be continuous functions from (the taxicab metric) to . Then the function from to defined by for every is a continuous function.   If and are metric spaces with , then the constant function defined by for every is a continuous function.  "
},
{
  "id": "sec_open_balls_intro",
  "level": "1",
  "url": "sec_open_balls_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Open sets are vitally important in topology. We will see later that every topological space is completely defined by its open sets, and continuous functions can be defined just in terms of open sets. In this section we introduce the idea of open balls and neighborhoods in metric spaces and discover a few of their properties. This discussion will form the basis for introducing open sets in the next section.  Recall that the continuity of a function from a metric space to a metric space at a point is defined in terms of sets of points such that and such that for positive real numbers and . In with the Euclidean metric , for real numbers and the set of values satisfying is the set of values so that . We often write this set in interval notation as and call an open interval. An informal reason that we call such an interval open (as opposed to the intervals , , or ) is that the open interval does not contain either of its endpoints. A more substantial reason to call such an interval open is that if is any element in , then we can find another open interval around that is completely contained in the interval . So you could naively think of an open interval as one in which there is enough room in the interval for any point in the interval to wiggle around a bit and stay within the interval.  Since the open interval can be described completely by the Euclidean metric as the set of values so that , there is no reason why we can't extend this notation of open interval to any metric space. We must note, though, that is one-dimensional while most metric spaces are not, so the term interval will no longer be appropriate. We replace the concept of interval with that of an open ball.   open ball in a metric space   Let be a metric space, and let . For , the open ball of radius around is the set .    We note here that our notation for an open ball is not universal. For example, some texts use for our .    Describe and draw a picture of the indicated open ball in each of the following metric spaces.    The open ball in the metric space with the Euclidean metric .    The open ball in the metric space with the Euclidean metric .    The open ball in the metric space with the max metric .    The open ball in the metric space with the taxicab metric .    The open ball in the metric space with the discrete metric . What is the difference between and in this metric space if ? If ?    "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "sec_open_balls_intro.html#definition-21",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": " open ball in a metric space   Let be a metric space, and let . For , the open ball of radius around is the set .   "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "sec_open_balls_intro.html#exploration-6",
  "type": "Preview Activity",
  "number": "7.1",
  "title": "",
  "body": "  Describe and draw a picture of the indicated open ball in each of the following metric spaces.    The open ball in the metric space with the Euclidean metric .    The open ball in the metric space with the Euclidean metric .    The open ball in the metric space with the max metric .    The open ball in the metric space with the taxicab metric .    The open ball in the metric space with the discrete metric . What is the difference between and in this metric space if ? If ?   "
},
{
  "id": "sec_neighborhoods",
  "level": "1",
  "url": "sec_neighborhoods.html",
  "type": "Section",
  "number": "",
  "title": "Neighborhoods",
  "body": " Neighborhoods  -neighborhood of a point in a metric space  We are familiar with the idea of open intervals in . We next introduce the idea of an open neighborhood of a point and characterize continuity in terms of neighborhoods. This is the next step in developing the notation of continuity in topological spaces.  The open ball in a metric space is also called the -neighborhood around . A neighborhood of a point can be thought of as any set that envelops that point.   neighborhood in a metric space   Let be a metric space, and let . A subset of is a neighborhood of if there exists a such that .         In with the Euclidean metric, the set (the positive real numbers) is a neighborhood of because the open ball is completely contained in .    In with the Euclidean metric, the set is not a neighborhood of because any open ball centered at will contain some non-integers.    In with the discrete metric, the set is a neighborhood of because the open ball .       As another example, the open ball is a neighborhood of . We can say even more about open balls.    Let be a metric space, let , and let . In this activity we ask the question, is a neighborhood of each of its points?    Let . What do we have to do to show that is a neighborhood of ?    Use to help show that is a neighborhood of .   as a neighborhood of .      Is the converse true? That is, if a set is a neighborhood of each of its points, is the set an open ball? No proof is necessary, but a convincing argument is in order.    "
},
{
  "id": "p-778",
  "level": "2",
  "url": "sec_neighborhoods.html#p-778",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-neighborhood "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "sec_neighborhoods.html#definition-22",
  "type": "Definition",
  "number": "7.2",
  "title": "",
  "body": " neighborhood in a metric space   Let be a metric space, and let . A subset of is a neighborhood of if there exists a such that .   "
},
{
  "id": "exp_neighborhood_MS",
  "level": "2",
  "url": "sec_neighborhoods.html#exp_neighborhood_MS",
  "type": "Example",
  "number": "7.3",
  "title": "",
  "body": "     In with the Euclidean metric, the set (the positive real numbers) is a neighborhood of because the open ball is completely contained in .    In with the Euclidean metric, the set is not a neighborhood of because any open ball centered at will contain some non-integers.    In with the discrete metric, the set is a neighborhood of because the open ball .      "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "sec_neighborhoods.html#activity-26",
  "type": "Activity",
  "number": "7.2",
  "title": "",
  "body": "  Let be a metric space, let , and let . In this activity we ask the question, is a neighborhood of each of its points?    Let . What do we have to do to show that is a neighborhood of ?    Use to help show that is a neighborhood of .   as a neighborhood of .      Is the converse true? That is, if a set is a neighborhood of each of its points, is the set an open ball? No proof is necessary, but a convincing argument is in order.   "
},
{
  "id": "sec_cont_neighborhoods",
  "level": "1",
  "url": "sec_cont_neighborhoods.html",
  "type": "Section",
  "number": "",
  "title": "Continuity and Neighborhoods",
  "body": " Continuity and Neighborhoods  We can define continuity now in terms of neighborhoods instead of using metrics. The advantage here is that this idea does not explicitly depend on the existence of a metric, so we will be able to adopt this concept of continuity for arbitrary topological spaces.  Recall that a function from a metric space to a metric space is continuous at if, for any there exists so that implies . We can interpret this definition of continuity to say that for every , the inverse image under of the open ball contains the open ball for some . It is not unreasonable to wonder if the set itself is an open ball. We investigate this question in the following activity.    Let be a function from a metric space to a metric space that is continuous at . Using the notation from the paragraph above, in this activity we determine if must equal for some .  Define by , where we use the Euclidean metric throughout. Assume that is a continuous function. Then is continuous at .    What is ?    What is ?    Is an open ball centered at ? Explain.    The conclusion to be drawn from is that if is continuous, we can only conclude that the inverse image of  contains an open ball centered at . By definition of continuity, if for every there exists a so that the open ball contains , then is continuous at . We summarize this in the next theorem.    Let be a function a metric space to a metric space , and let . Then is continuous at if and only if, given any there exists so that .    We can extend this idea of continuity to describe continuity in terms of neighborhoods. This condition will allow us to later consider continuous functions even if there are no metrics on our spaces.    Let and be metric spaces, and let be a function. Then is continuous at if and only if the inverse image of every neighborhood of is a neighborhood of .    Let and be metric spaces, and let be a function. To prove this biconditional statement we need to prove both implications. First assume that is continuous at some point . We will show that for any neighborhood of in , its inverse image in is a neighborhood of in . Let be a neighborhood of in . To demonstrate that is a neighborhood of in , we need to find an open ball around that is contained in . Since is a neighborhood of , by definition there exists so that . Since is continuous at , there exists such that . So if , then . So , and is a neighborhood of in .  The proof of the reverse implication is left for the next activity.      Let and be metric spaces, and let be a function. Let . In this activity we prove that if the inverse image of every neighborhood of is a neighborhood of , then is continuous at .    What does tell us that we need to do to show that is continuous at ?   Suppose is greater than 0, why is a neighborhood of in ?    What does our hypothesis tell us about ?    What can we conclude from part (c)?    How do (a)-(d) show that is continuous at ?    We conclude this section with some important facts about neighborhoods. Assume that is a metric space and .   There is a neighborhood that contains .    If is a neighborhood of and , then is a neighborhood of .    If and are neighborhoods of , then so is .     The proofs are straightforward and left for .  "
},
{
  "id": "act_OB_1",
  "level": "2",
  "url": "sec_cont_neighborhoods.html#act_OB_1",
  "type": "Activity",
  "number": "7.3",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space that is continuous at . Using the notation from the paragraph above, in this activity we determine if must equal for some .  Define by , where we use the Euclidean metric throughout. Assume that is a continuous function. Then is continuous at .    What is ?    What is ?    Is an open ball centered at ? Explain.   "
},
{
  "id": "p-796",
  "level": "2",
  "url": "sec_cont_neighborhoods.html#p-796",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contains "
},
{
  "id": "thm_open_ball_continuity",
  "level": "2",
  "url": "sec_cont_neighborhoods.html#thm_open_ball_continuity",
  "type": "Theorem",
  "number": "7.5",
  "title": "",
  "body": "  Let be a function a metric space to a metric space , and let . Then is continuous at if and only if, given any there exists so that .   "
},
{
  "id": "theorem-13",
  "level": "2",
  "url": "sec_cont_neighborhoods.html#theorem-13",
  "type": "Theorem",
  "number": "7.6",
  "title": "",
  "body": "  Let and be metric spaces, and let be a function. Then is continuous at if and only if the inverse image of every neighborhood of is a neighborhood of .    Let and be metric spaces, and let be a function. To prove this biconditional statement we need to prove both implications. First assume that is continuous at some point . We will show that for any neighborhood of in , its inverse image in is a neighborhood of in . Let be a neighborhood of in . To demonstrate that is a neighborhood of in , we need to find an open ball around that is contained in . Since is a neighborhood of , by definition there exists so that . Since is continuous at , there exists such that . So if , then . So , and is a neighborhood of in .  The proof of the reverse implication is left for the next activity.   "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "sec_cont_neighborhoods.html#activity-28",
  "type": "Activity",
  "number": "7.4",
  "title": "",
  "body": "  Let and be metric spaces, and let be a function. Let . In this activity we prove that if the inverse image of every neighborhood of is a neighborhood of , then is continuous at .    What does tell us that we need to do to show that is continuous at ?   Suppose is greater than 0, why is a neighborhood of in ?    What does our hypothesis tell us about ?    What can we conclude from part (c)?    How do (a)-(d) show that is continuous at ?   "
},
{
  "id": "sec_open_balls_summ",
  "level": "1",
  "url": "sec_open_balls_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   If is a metric space and , then an open ball centered at is a set of the form for some positive number .    A subset of a metric space is s neighborhood of a point if there is a positive real number such that .    An important property of open balls is that every open ball is a neighborhood of each of its points. This is our first step toward defining the concept of open sets that will form the foundation for topological spaces.    A function from a metric space to a metric space is continuous at if is a neighborhood of in for any neighborhood of in .     "
},
{
  "id": "sec_open_balls_exer",
  "level": "1",
  "url": "sec_open_balls_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Determine, with proof, which of the following sets is a neighborhood of in the indicated metric space.    in with     is the -axis in with , where is the taxicab metric    is the set of rational numbers in with     is the set of positive integers in and , where is the set of all rational numbers in reduced form with metric defined by (The fact that is a metric is the topic of .)    Let and define by . That is, is the remainder when is divided by . That is a metric on is examined in . Let be a metric space. Is it possible to define a function that is not continuous? Explain.    If , we let . For and , define by The fact that is a metric is examined in . Let and let . Define and by . One of , is continuous and the other is not. Determine which is which, with proof for each.    Recall from that we can construct a finite metric space by starting with a finite set of points and making a graph with the points as vertices. We construct edges so that the graph is connected (that is, there is a path from any one vertex to any other) and give weights to the edges. We then define a metric on by letting be the length of a shortest path between vertices and in the graph. Consider the metric space corresponding to the graph in .   A graph to define a metric.     Determine all of the open balls for every positive real number .   Find all of the neighborhoods of .    Let be defined by for some real numbers and with . Let and let . Show that contains an open ball centered at . Conclude that every linear function from to is continuous.   By we can assume to simplify the problem.   Let be defined by for some real numbers , , and with . Let and let . contains an open ball centered at . Conclude that every quadratic function from to is continuous.   Consider cases.    Let be a metric space, and let be a nonempty subset of . tells us that for all . Define by . Let . Given , show that there is a neighborhood of such that implies . Conclude that is a continuous function. (Assume the metric on is the Euclidean metric.)    Let and be distinct points of a metric space . Prove that there are neighborhoods and of and respectively such that .    Let be a metric space and let . Prove each of the following.   There is a neighborhood that contains .   If is a neighborhood of and , then is a neighborhood of .   If and are neighborhoods of , then so is .    Let be a continuous function. Show that if for some , then there is a neighborhood of such that for all .    Let be a metric space where is the discrete metric. Show that every subset of is a neighborhood of each of its points.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a neighborhood of a point in a metric space , then any open ball contained in is also a neighborhood of .   If is a neighborhood of a point in a metric space , then is a neighborhood of each of its points.   If and are metric spaces and is a continuous function, then is a neighborhood of in whenever is a neighborhood of in .   If and are metric spaces and is continuous at , and is a neighborhood of in , then is a neighborhood of in .   If is a point in a metric space and if is a positive real number, then the open ball contains infinitely many points of .   If , , , are neighborhoods of a point in a metric space for some positive integer , then is a neighborhood of .   If is a neighborhood of a point in a metric space for all in some indexing set , then is a neighborhood of .   "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-69",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine, with proof, which of the following sets is a neighborhood of in the indicated metric space.    in with     is the -axis in with , where is the taxicab metric    is the set of rational numbers in with     is the set of positive integers in and , where is the set of all rational numbers in reduced form with metric defined by (The fact that is a metric is the topic of .)  "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-70",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let and define by . That is, is the remainder when is divided by . That is a metric on is examined in . Let be a metric space. Is it possible to define a function that is not continuous? Explain.  "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-71",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " If , we let . For and , define by The fact that is a metric is examined in . Let and let . Define and by . One of , is continuous and the other is not. Determine which is which, with proof for each.  "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-72",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Recall from that we can construct a finite metric space by starting with a finite set of points and making a graph with the points as vertices. We construct edges so that the graph is connected (that is, there is a path from any one vertex to any other) and give weights to the edges. We then define a metric on by letting be the length of a shortest path between vertices and in the graph. Consider the metric space corresponding to the graph in .   A graph to define a metric.     Determine all of the open balls for every positive real number .   Find all of the neighborhoods of .  "
},
{
  "id": "ex_linear_continuous1",
  "level": "2",
  "url": "sec_open_balls_exer.html#ex_linear_continuous1",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let be defined by for some real numbers and with . Let and let . Show that contains an open ball centered at . Conclude that every linear function from to is continuous.   By we can assume to simplify the problem.   Let be defined by for some real numbers , , and with . Let and let . contains an open ball centered at . Conclude that every quadratic function from to is continuous.   Consider cases.  "
},
{
  "id": "ex_metric_continuous",
  "level": "2",
  "url": "sec_open_balls_exer.html#ex_metric_continuous",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be a metric space, and let be a nonempty subset of . tells us that for all . Define by . Let . Given , show that there is a neighborhood of such that implies . Conclude that is a continuous function. (Assume the metric on is the Euclidean metric.)  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-75",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let and be distinct points of a metric space . Prove that there are neighborhoods and of and respectively such that .  "
},
{
  "id": "ex_Nghb_properties",
  "level": "2",
  "url": "sec_open_balls_exer.html#ex_Nghb_properties",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let be a metric space and let . Prove each of the following.   There is a neighborhood that contains .   If is a neighborhood of and , then is a neighborhood of .   If and are neighborhoods of , then so is .  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-77",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a continuous function. Show that if for some , then there is a neighborhood of such that for all .  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-78",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let be a metric space where is the discrete metric. Show that every subset of is a neighborhood of each of its points.  "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "sec_open_balls_exer.html#exercise-79",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a neighborhood of a point in a metric space , then any open ball contained in is also a neighborhood of .   If is a neighborhood of a point in a metric space , then is a neighborhood of each of its points.   If and are metric spaces and is a continuous function, then is a neighborhood of in whenever is a neighborhood of in .   If and are metric spaces and is continuous at , and is a neighborhood of in , then is a neighborhood of in .   If is a point in a metric space and if is a positive real number, then the open ball contains infinitely many points of .   If , , , are neighborhoods of a point in a metric space for some positive integer , then is a neighborhood of .   If is a neighborhood of a point in a metric space for all in some indexing set , then is a neighborhood of .  "
},
{
  "id": "sec_open_sets_intro",
  "level": "1",
  "url": "sec_open_sets_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Consider the interval in using the Euclidean metric. If , then , so every open interval is an open ball. As an open ball, an open interval is a neighborhood of each of its points. This is the foundation for the definition of an open set in a metric space.  Recall that we defined a subset of to be neighborhood of point in a metric space if contains an open ball for some . We saw that every open ball is a neighborhood of each of its points, and we will now extend that idea to define an open set in a metric space.    A subset of a metric space is an open set open set in a metric space if is a neighborhood of each of its points.    So, by definition, any open ball is an open set. Also by definition, open sets are neighborhoods of each of their points. Open sets are different than non-open sets. For example, is an open set in using the Euclidean metric, but is not. The reason is not an open set is that there is no open ball centered at that is entirely contained in . So has a different property than the other points in . The set is a neighborhood of each of the points in , but is not a neighborhood of . We can think of the points in as being in the interior of the set . This leads to the next definition.   interior point in a subset of a metric space   Let be a subset of a metric space . A point is an interior point of if is a neighborhood of .    As we will soon see, open sets can be characterized in terms of interior points.    Determine if the set is an open set in the metric space . Explain your reasoning.    , , the Euclidean metric, .    , , the Euclidean metric, . Assume that the Euclidean metric is a metric on .    , is the discrete metric defined by and .    What are the interior points of the following sets in ? Explain. .   Let in . What are the interior points of ? Explain.   Let be the set of rational numbers in . What are the interior points of ? Explain.    "
},
{
  "id": "p-854",
  "level": "2",
  "url": "sec_open_sets_intro.html#p-854",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open set "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "sec_open_sets_intro.html#definition-23",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": "  A subset of a metric space is an open set open set in a metric space if is a neighborhood of each of its points.   "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "sec_open_sets_intro.html#definition-24",
  "type": "Definition",
  "number": "8.2",
  "title": "",
  "body": " interior point in a subset of a metric space   Let be a subset of a metric space . A point is an interior point of if is a neighborhood of .   "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "sec_open_sets_intro.html#exploration-7",
  "type": "Preview Activity",
  "number": "8.1",
  "title": "",
  "body": "  Determine if the set is an open set in the metric space . Explain your reasoning.    , , the Euclidean metric, .    , , the Euclidean metric, . Assume that the Euclidean metric is a metric on .    , is the discrete metric defined by and .    What are the interior points of the following sets in ? Explain. .   Let in . What are the interior points of ? Explain.   Let be the set of rational numbers in . What are the interior points of ? Explain.   "
},
{
  "id": "sec_open_sets",
  "level": "1",
  "url": "sec_open_sets.html",
  "type": "Section",
  "number": "",
  "title": "Open Sets",
  "body": " Open Sets  Open sets are vitally important in topology. In fact, we will see later that every topological space is completely defined by its open sets. Recall that an open ball is an open set. There are other subsets that every metric space contains, and we might ask if they are open or not.    Let be a metric space.    Is an open set in ? Explain.    Is an open set in ? Explain.    We have defined open balls, and open balls are the canonical examples of open sets. In fact, as the following theorem shows, the open balls determine the open sets.    Let be a metric space. A subset of is open if and only if is a union of open balls.    Let be a metric space and a subset of . To prove this biconditional statement we first assume that is an open set and demonstrate that is a union of open balls. Let . Since is open, there exists so that . We will show that .  By the way we chose , for every . So . For the reverse containment, let . Then and so . Thus, . We conclude that is a union of open balls if is an open set.  The proof of the converse is left for the following activity.      Let be a metric space. To prove the remaining implication of , assume that a subset of is a union of open balls.    What do we need to show to prove that is an open set?    Let . Why is there an open ball in that contains ?    Complete the proof to show that is an open set.     tells us that every open set is made up of open balls, so the open balls generate all open sets much like a basis of a vector space in linear algebra generates all of the elements of the vector space. For this reason we call the set of open balls in a metric space a basis for the open sets of the metric space. We will discuss this idea in more detail in a subsequent section.  "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "sec_open_sets.html#activity-29",
  "type": "Activity",
  "number": "8.2",
  "title": "",
  "body": "  Let be a metric space.    Is an open set in ? Explain.    Is an open set in ? Explain.   "
},
{
  "id": "thm_OS_1",
  "level": "2",
  "url": "sec_open_sets.html#thm_OS_1",
  "type": "Theorem",
  "number": "8.3",
  "title": "",
  "body": "  Let be a metric space. A subset of is open if and only if is a union of open balls.    Let be a metric space and a subset of . To prove this biconditional statement we first assume that is an open set and demonstrate that is a union of open balls. Let . Since is open, there exists so that . We will show that .  By the way we chose , for every . So . For the reverse containment, let . Then and so . Thus, . We conclude that is a union of open balls if is an open set.  The proof of the converse is left for the following activity.   "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "sec_open_sets.html#activity-30",
  "type": "Activity",
  "number": "8.3",
  "title": "",
  "body": "  Let be a metric space. To prove the remaining implication of , assume that a subset of is a union of open balls.    What do we need to show to prove that is an open set?    Let . Why is there an open ball in that contains ?    Complete the proof to show that is an open set.   "
},
{
  "id": "p-879",
  "level": "2",
  "url": "sec_open_sets.html#p-879",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "sec_union_int_open_sets",
  "level": "1",
  "url": "sec_union_int_open_sets.html",
  "type": "Section",
  "number": "",
  "title": "Unions and Intersections of Open Sets",
  "body": " Unions and Intersections of Open Sets  Once we have defined open sets we might wonder about what happens if we take a union or intersection of open sets.    Let and in .   Is open? Explain.   Is open? Explain.    Let with the Euclidean metric. Let for each .   What is ? A proof is not necessary.   Is open in ? Explain.   What is ? A proof is not necessary.   Is open in ? Explain.     demonstrates that an arbitrary intersection of open sets is not necessarily open. However, there are some things we can say about unions and intersections of open sets.    Let be a metric space.   Any union of open sets in is an open set in .    Any finite intersection of open sets in is an open set in .       Let be a metric space. To prove part 1, assume that is a collection of open sets in for in some indexing set and let . By , we know that is a union of open balls for each . Combining all of these open balls together shows that is a union of open balls and is therefore an open set by .  For part 2, assume that , , , are open sets in for some . To show that is an open set, we will show that is a neighborhood of each of its points. Let . Then for each . Let be between 1 and . Since is open, we know that is a neighborhood of each of its points. So there exists such that . Since there are only finitely many values of , let . Then for each and so . Therefore, is a neighborhood of each of its points and is an open set.    "
},
{
  "id": "act_Open_union",
  "level": "2",
  "url": "sec_union_int_open_sets.html#act_Open_union",
  "type": "Activity",
  "number": "8.4",
  "title": "",
  "body": "  Let and in .   Is open? Explain.   Is open? Explain.    Let with the Euclidean metric. Let for each .   What is ? A proof is not necessary.   Is open in ? Explain.   What is ? A proof is not necessary.   Is open in ? Explain.   "
},
{
  "id": "theorem-15",
  "level": "2",
  "url": "sec_union_int_open_sets.html#theorem-15",
  "type": "Theorem",
  "number": "8.4",
  "title": "",
  "body": "  Let be a metric space.   Any union of open sets in is an open set in .    Any finite intersection of open sets in is an open set in .       Let be a metric space. To prove part 1, assume that is a collection of open sets in for in some indexing set and let . By , we know that is a union of open balls for each . Combining all of these open balls together shows that is a union of open balls and is therefore an open set by .  For part 2, assume that , , , are open sets in for some . To show that is an open set, we will show that is a neighborhood of each of its points. Let . Then for each . Let be between 1 and . Since is open, we know that is a neighborhood of each of its points. So there exists such that . Since there are only finitely many values of , let . Then for each and so . Therefore, is a neighborhood of each of its points and is an open set.   "
},
{
  "id": "sec_cont_open_sets",
  "level": "1",
  "url": "sec_cont_open_sets.html",
  "type": "Section",
  "number": "",
  "title": "Continuity and Open Sets",
  "body": " Continuity and Open Sets  Recall that we showed that a function from a metric space to a metric space is continuous if and only if is a neighborhood of whenever is a neighborhood of in . We can now provide another characterization of continuous functions in terms of open sets. This is the characterization that will serve as our definition of continuity in topological spaces.    Let be a function from a metric space to a metric space . Then is continuous if and only if is an open set in whenever is an open set in .    Let and be metric spaces, and let be a function. To prove this biconditional statement we need to prove both implications. First assume that is a continuous function. We must show that is an open set in for every open set in . So let be an open set in . To demonstrate that is open in , we will show that is a neighborhood of each of its points. Let . Then . Now is an open set, so there is an open ball around that is entirely contained in . Since is a neighborhood of , we know that is a neighborhood of . Thus, there exists so that . Now , and so . We conclude that is a neighborhood of each of its points and is therefore an open set in .  The proof of the reverse implication is left for the next activity.      Let be a function from a metric space to a metric space .    What assumption do we make to prove the remaining implication of ? What do we need to demonstrate to prove the conclusion?    Let , and let be a neighborhood of in . Why does there exist an so that .    What does our hypothesis tell us about in ?    Why is a neighborhood of ? How does this show that is a continuous function?    Recall that every open set is a union of open balls, so we can simplify proofs of continuous functions in metric spaces by working only with open balls instead of arbitrary open sets. The next activity provides the details.    In this activity we prove the following corollary to .    A function from a metric space to a metric space is continuous if and only if is open in whenever is an open ball in .    To set up the proof, let and be metric spaces, and let be a function.    Since the corollary is a biconditional statement, we need to prove both implications. First, assume that is continuous. Use to explain why is open in whenever is an open ball in .    For the remaining implication, assume that is an open set in for any open ball in . To show that is a continuous function, we will use and show that is open in whenever is an open set in . So let be an open set in .   What does tell us about .   Recall that tells us that if is a collection of subsets of for in some indexing set , then . Use to show that is open in and conclude that is a continuous function.      As an example of , we prove that the square function from to is a continuous function. Let with the Euclidean metric , and let be defined by . We will show that is a continuous function by verifying that is open in for every open ball in . Let be an open ball in . Let . We consider cases.   Suppose that . Then and is open in .    Suppose that . Then and is open in .    The final case is . Then and is open in .     Since the inverse image of every open ball is an open set, we conclude that is a continuous function.    "
},
{
  "id": "thm_Open_continuity",
  "level": "2",
  "url": "sec_cont_open_sets.html#thm_Open_continuity",
  "type": "Theorem",
  "number": "8.5",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space . Then is continuous if and only if is an open set in whenever is an open set in .    Let and be metric spaces, and let be a function. To prove this biconditional statement we need to prove both implications. First assume that is a continuous function. We must show that is an open set in for every open set in . So let be an open set in . To demonstrate that is open in , we will show that is a neighborhood of each of its points. Let . Then . Now is an open set, so there is an open ball around that is entirely contained in . Since is a neighborhood of , we know that is a neighborhood of . Thus, there exists so that . Now , and so . We conclude that is a neighborhood of each of its points and is therefore an open set in .  The proof of the reverse implication is left for the next activity.   "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "sec_cont_open_sets.html#activity-32",
  "type": "Activity",
  "number": "8.5",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space .    What assumption do we make to prove the remaining implication of ? What do we need to demonstrate to prove the conclusion?    Let , and let be a neighborhood of in . Why does there exist an so that .    What does our hypothesis tell us about in ?    Why is a neighborhood of ? How does this show that is a continuous function?   "
},
{
  "id": "act_continuity_balls",
  "level": "2",
  "url": "sec_cont_open_sets.html#act_continuity_balls",
  "type": "Activity",
  "number": "8.6",
  "title": "",
  "body": "  In this activity we prove the following corollary to .    A function from a metric space to a metric space is continuous if and only if is open in whenever is an open ball in .    To set up the proof, let and be metric spaces, and let be a function.    Since the corollary is a biconditional statement, we need to prove both implications. First, assume that is continuous. Use to explain why is open in whenever is an open ball in .    For the remaining implication, assume that is an open set in for any open ball in . To show that is a continuous function, we will use and show that is open in whenever is an open set in . So let be an open set in .   What does tell us about .   Recall that tells us that if is a collection of subsets of for in some indexing set , then . Use to show that is open in and conclude that is a continuous function.   "
},
{
  "id": "exp_linear_continuous",
  "level": "2",
  "url": "sec_cont_open_sets.html#exp_linear_continuous",
  "type": "Example",
  "number": "8.7",
  "title": "",
  "body": "  As an example of , we prove that the square function from to is a continuous function. Let with the Euclidean metric , and let be defined by . We will show that is a continuous function by verifying that is open in for every open ball in . Let be an open ball in . Let . We consider cases.   Suppose that . Then and is open in .    Suppose that . Then and is open in .    The final case is . Then and is open in .     Since the inverse image of every open ball is an open set, we conclude that is a continuous function.   "
},
{
  "id": "sec_interior_set",
  "level": "1",
  "url": "sec_interior_set.html",
  "type": "Section",
  "number": "",
  "title": "The Interior of a Set",
  "body": " The Interior of a Set  Open sets can be characterized in terms of their interior points. By definition, every open set is a neighborhood of each of its points, so every point of an open set is an interior point of . Conversely, if every point of a set is an interior point, then is a neighborhood of each of its points and is open. This argument is summarized in the next theorem.    Let be a metric space. A subset of is open if and only if every point of is an interior point of .    The collection of interior points in a set form a subset of that set, called the interior of the set.    The interior interior of a set of a subset of a metric space is the set .      Determine for each of the sets .     in      in      in     One might expect that the interior of a set is an open set. This is true, but we can say even more. As will show, if is a subset of a metric space , not only is an open set, but every open set that is contained in is a subset of . So is the largest, in the sense of containment, open subset of that contains .    Let be a metric space, and let be a subset of . Then interior of is the largest open subset of contained in .    Let be a metric space, and let be a subset of . We need to prove that is an open set in , and that is the largest open subset of contained in . First we demonstrate that is an open set. Let . Then is an interior point of , so is a neighborhood of . This implies that there exists an so that . But is a neighborhood of each of its points, so every point in is an interior point of . It follows that . Thus, is a neighborhood of each of its points and, consequently, is an open set.  The proof that is the largest open subset of contained in is left for the next activity.      Let be a metric space, and let be a subset of .    What will we have to show to prove that is the largest open subset of contained in ?    Suppose that is an open subset of that is contained in , and let . What does the fact that is open tell us?    Complete the proof that .    One consequence of is the following.    A subset of a metric space is open if and only if .    The proof is left for .  "
},
{
  "id": "theorem-17",
  "level": "2",
  "url": "sec_interior_set.html#theorem-17",
  "type": "Theorem",
  "number": "8.8",
  "title": "",
  "body": "  Let be a metric space. A subset of is open if and only if every point of is an interior point of .   "
},
{
  "id": "p-919",
  "level": "2",
  "url": "sec_interior_set.html#p-919",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interior "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "sec_interior_set.html#definition-25",
  "type": "Definition",
  "number": "8.9",
  "title": "",
  "body": "  The interior interior of a set of a subset of a metric space is the set .   "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "sec_interior_set.html#activity-34",
  "type": "Activity",
  "number": "8.7",
  "title": "",
  "body": "  Determine for each of the sets .     in      in      in    "
},
{
  "id": "thm_Interior_MS",
  "level": "2",
  "url": "sec_interior_set.html#thm_Interior_MS",
  "type": "Theorem",
  "number": "8.10",
  "title": "",
  "body": "  Let be a metric space, and let be a subset of . Then interior of is the largest open subset of contained in .    Let be a metric space, and let be a subset of . We need to prove that is an open set in , and that is the largest open subset of contained in . First we demonstrate that is an open set. Let . Then is an interior point of , so is a neighborhood of . This implies that there exists an so that . But is a neighborhood of each of its points, so every point in is an interior point of . It follows that . Thus, is a neighborhood of each of its points and, consequently, is an open set.  The proof that is the largest open subset of contained in is left for the next activity.   "
},
{
  "id": "activity-35",
  "level": "2",
  "url": "sec_interior_set.html#activity-35",
  "type": "Activity",
  "number": "8.8",
  "title": "",
  "body": "  Let be a metric space, and let be a subset of .    What will we have to show to prove that is the largest open subset of contained in ?    Suppose that is an open subset of that is contained in , and let . What does the fact that is open tell us?    Complete the proof that .   "
},
{
  "id": "corollary-4",
  "level": "2",
  "url": "sec_interior_set.html#corollary-4",
  "type": "Corollary",
  "number": "8.11",
  "title": "",
  "body": "  A subset of a metric space is open if and only if .   "
},
{
  "id": "sec_open_sets_summ",
  "level": "1",
  "url": "sec_open_sets_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A subset of a metric space is an open set if is a neighborhood of each of its points. Alternatively, is open if is a union of open balls.    A point in a subset of a metric space is an interior point of if is a neighborhood of . A set is open if every point of is an interior point of .    The interior of a set is the set of all interior points of the set. The interior of a set in a metric space is the largest open subset of contained in . A set is open if and only if the set is equal to its interior.    A function from a metric space to a metric space is continuous if is open in whenever is open in .    Any union of open sets is open, while any finite intersection of open sets is open.     "
},
{
  "id": "sec_open_sets_exer",
  "level": "1",
  "url": "sec_open_sets_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let be the discrete metric. Let be a metric space.   Show that every subset of is open.   Let be a metric space. Prove that every function is continuous.   Is it also true that every function is continuous? If yes, prove your answer. If no, find a counterexample.    Prove that a subset of a metric space is open if and only if .    Let and be subsets of a metric space with . Prove or disprove the following.            Let with . Show that the set in is not an open set.    Let .   Is an open set in ? Prove your answer.   Is an open set in ? Prove your answer.   Is an open set in ? Prove your answer.    Let be a finite set of points in . Is the set an open set in ? Prove your answer.    Let and be metric spaces and let be a function. Prove that is continuous if and only if for every subset of .    Consider the metric space , where is defined by (The fact that is a metric is the topic of .) Describe the open ball in if .    Let be a metric space and let and be distinct points in . Prove that there are open sets containing and containing such that . (This shows that we can separate points in metric spaces with open sets. Separation properties are important in topology.)    Let with the Euclidean metric , and let with the metric defined by (that is a metric is the subject of ). Let and be real numbers and let be defined by . That is, is an arbitrary linear function from to .   Describe the open balls in . That is, if is a real number and is a positive real number, what is the specific set of points in in ?   Is from to continuous for any real numbers and ? Prove your answer.   Is from to continuous for any real numbers and ? Prove your answer.    Let be defined by . Assume that we use the max metric on and the Euclidean metric on . Use Theorem to determine if a continuous function. Prove your conjecture.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   Every subset of an open set in a metric space is open in .   A subset of is open under the Euclidean metric if and only if is open under the taxicab metric .   Let X = endowed with the Euclidean metric. Then is an open subset of .   "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-80",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let be the discrete metric. Let be a metric space.   Show that every subset of is open.   Let be a metric space. Prove that every function is continuous.   Is it also true that every function is continuous? If yes, prove your answer. If no, find a counterexample.  "
},
{
  "id": "ex_O_int_O",
  "level": "2",
  "url": "sec_open_sets_exer.html#ex_O_int_O",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Prove that a subset of a metric space is open if and only if .  "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-82",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be subsets of a metric space with . Prove or disprove the following.          "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-83",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let with . Show that the set in is not an open set.  "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-84",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let .   Is an open set in ? Prove your answer.   Is an open set in ? Prove your answer.   Is an open set in ? Prove your answer.  "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-85",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be a finite set of points in . Is the set an open set in ? Prove your answer.  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-86",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let and be metric spaces and let be a function. Prove that is continuous if and only if for every subset of .  "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-87",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Consider the metric space , where is defined by (The fact that is a metric is the topic of .) Describe the open ball in if .  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-88",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a metric space and let and be distinct points in . Prove that there are open sets containing and containing such that . (This shows that we can separate points in metric spaces with open sets. Separation properties are important in topology.)  "
},
{
  "id": "ex_linear_continuous2",
  "level": "2",
  "url": "sec_open_sets_exer.html#ex_linear_continuous2",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let with the Euclidean metric , and let with the metric defined by (that is a metric is the subject of ). Let and be real numbers and let be defined by . That is, is an arbitrary linear function from to .   Describe the open balls in . That is, if is a real number and is a positive real number, what is the specific set of points in in ?   Is from to continuous for any real numbers and ? Prove your answer.   Is from to continuous for any real numbers and ? Prove your answer.  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-90",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be defined by . Assume that we use the max metric on and the Euclidean metric on . Use Theorem to determine if a continuous function. Prove your conjecture.  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "sec_open_sets_exer.html#exercise-91",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   If and are nonempty subsets of a metric space , then .   Every subset of an open set in a metric space is open in .   A subset of is open under the Euclidean metric if and only if is open under the taxicab metric .   Let X = endowed with the Euclidean metric. Then is an open subset of .  "
},
{
  "id": "sec_seq_intro",
  "level": "1",
  "url": "sec_seq_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We were introduced to sequences in calculus, and we can extend the notion of the limit of a sequence to metric spaces. Sequences provide an alternate way to describe many ideas in metric space. For example, we will see that we can characterize continuity in terms of sequences, and we can use sequences to determine open and closed sets.  Recall from calculus that a sequence of real numbers is a list of numbers in a specified order. We write a sequence , , , , as or just . If we think of each as the output of a function, we can give a more formal definition of a sequence as a function , where for each .  A sequence of real numbers converges to a number if we can make all of the numbers in the sequence as close to as we like by choosing to be large enough. Once again, this is an informal description that we need to make more rigorous. As we saw with continuous functions, we can make more rigorous the idea of closeness by introducing a symbol for a number that can be arbitrarily small. So we can say that the numbers can get as close to a number as we want if we can make for any positive number . The idea of choosing large enough is just finding a large enough fixed integer so that whenever . This leads to the definition.   limit of a sequence of real numbers   A sequence of real numbers has a limit  if, given any there exists a positive integer (depending only on ) such that .    When a sequence has a limit , we write , or just (since we assume the limit for a sequence occurs as goes to infinity) and we say that the sequence  converges to .    We can draw a graph of a sequence of real numbers as the set of points . In this way we can visualize a sequence and its limit. By definition, is a limit of the sequence if, given any , we can go far enough out in the sequence so that the numbers in the sequence all lie in the horizontal band between and as illustrated in for the sequence .   The limit of the sequence .    To verify that the limit of the sequence is , we start with .    Scratch work. Now we need to find so that implies . Just as with our continuity example, this work is not part of the proof, but shows how we go about finding the we need. To make we need . Now we use this scratch work to design our proof.   Let (so that depends on ). Then for we have .  So the sequence has a limit of .     only applies to sequences of real numbers. Ultimately, we want to phrase the definition in a way that allows us to define limits of sequences in metric spaces and topological spaces. So we have to reformulate the definition in such a way that it does not depend on distances.  Recall that defined a metric on , that is .  So we can rephrase the definition of a limit of a sequence of real numbers as follows.   Alternate Definition   A sequence of real numbers has a limit  if, given any there exists a positive integer (depending only on ) such that .    Once we have described a limit of a sequence in terms of a metric, then we can extend the idea into any metric space.   sequence in a metric space   A sequence in a metric space is a function .    If is a sequence in , we write the sequence defined by as , where . We also use the notation , when . As long as has a metric defined on it, we can then describe the limit of a sequence.   limit of a sequence in a metric space   Let be a metric space. A sequence in has a limit  if, given any there exists a positive integer (depending only on ) such that .    In other words, a sequence in a metric space has a limit if  or that the sequence of real numbers has a limit of . Just as with sequences of real numbers, when a sequence has a limit , we say that the sequence  converges to , or that is a limit of the sequence .    Explain why the sequence converges to 0 in using the Euclidean metric , where .    Consider the sequence in , where is the taxicab metric . Does the sequence converge? If so, find its limit and prove that your candidate is the limit. If not, explain why.    Let in the metric space , where is the discrete metric defined by Does the sequence converge? If so, find its limit and prove that your candidate is the limit. If not, explain why.    "
},
{
  "id": "def_sequence_limit_real",
  "level": "2",
  "url": "sec_seq_intro.html#def_sequence_limit_real",
  "type": "Definition",
  "number": "9.1",
  "title": "",
  "body": " limit of a sequence of real numbers   A sequence of real numbers has a limit  if, given any there exists a positive integer (depending only on ) such that .   "
},
{
  "id": "p-979",
  "level": "2",
  "url": "sec_seq_intro.html#p-979",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec_seq_intro.html#example-7",
  "type": "Example",
  "number": "9.2",
  "title": "",
  "body": "  We can draw a graph of a sequence of real numbers as the set of points . In this way we can visualize a sequence and its limit. By definition, is a limit of the sequence if, given any , we can go far enough out in the sequence so that the numbers in the sequence all lie in the horizontal band between and as illustrated in for the sequence .   The limit of the sequence .    To verify that the limit of the sequence is , we start with .    Scratch work. Now we need to find so that implies . Just as with our continuity example, this work is not part of the proof, but shows how we go about finding the we need. To make we need . Now we use this scratch work to design our proof.   Let (so that depends on ). Then for we have .  So the sequence has a limit of .   "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "sec_seq_intro.html#definition-27",
  "type": "Definition",
  "number": "9.4",
  "title": "Alternate Definition.",
  "body": " Alternate Definition   A sequence of real numbers has a limit  if, given any there exists a positive integer (depending only on ) such that .   "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "sec_seq_intro.html#definition-28",
  "type": "Definition",
  "number": "9.5",
  "title": "",
  "body": " sequence in a metric space   A sequence in a metric space is a function .   "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "sec_seq_intro.html#definition-29",
  "type": "Definition",
  "number": "9.6",
  "title": "",
  "body": " limit of a sequence in a metric space   Let be a metric space. A sequence in has a limit  if, given any there exists a positive integer (depending only on ) such that .   "
},
{
  "id": "p-993",
  "level": "2",
  "url": "sec_seq_intro.html#p-993",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "sec_seq_intro.html#exploration-8",
  "type": "Preview Activity",
  "number": "9.1",
  "title": "",
  "body": "  Explain why the sequence converges to 0 in using the Euclidean metric , where .    Consider the sequence in , where is the taxicab metric . Does the sequence converge? If so, find its limit and prove that your candidate is the limit. If not, explain why.    Let in the metric space , where is the discrete metric defined by Does the sequence converge? If so, find its limit and prove that your candidate is the limit. If not, explain why.   "
},
{
  "id": "sec_seq_cont_metric",
  "level": "1",
  "url": "sec_seq_cont_metric.html",
  "type": "Section",
  "number": "",
  "title": "Sequences and Continuity in Metric Spaces",
  "body": " Sequences and Continuity in Metric Spaces  We have seen that there are different ways to characterize. For example, there is the definition and a characterization in terms of neighborhoods. In this section we investigate sequences and limits of sequences in metric spaces, and then provide a characterization of continuous functions in terms of sequences.    A reasonable question to ask is if a limit of a sequence is unique. We will answer that question in this activity. Let be a metric space and a sequence in . Assume the sequence has a limit in . To show that a limit of the sequence is unique, we need to show that if and for some , then .  Suppose and for some . Without much to go on it might appear that proving is a difficult task. However, if for any , then it will have to be the case that . So let .    Why must there exist a positive integer so that for all ?    Why must there exist a positive integer so that for all ?    Now let . What can we say about and ? Why?    Use the triangle inequality to conclude that . What else can we conclude?    Now we will examine how continuity can be described in terms of sequences. The basic idea is this. Suppose that is continuous at a point . This means that has a limit (as a continuous function) at . So if we were to take any sequence that converges to , then the continuity of implies that . That this is both a necessary condition and a sufficient condition for continuity is given in the next theorem.    Let and be metric spaces, and let . A function is continuous at if and only if for any sequence in that converges to .    Let and be metric spaces, let , and let be a function. Assume that is continuous at . We will show that for any sequence in that converges to . Let be a sequence in that converges to (we know such a sequence exists, namely the sequence ). To verify that , let . The fact that is continuous at means that there is a so that whenever . Since converges to , we know that there exists a positive integer such that whenever . This implies that .  We conclude that if is continuous at , then for any sequence in that converges to .  The proof of the reverse implication is contained in the next activity.      Let and be metric spaces, let , and let be a function. We prove the remaining implication of , that is continuous at if for any sequence in that converges to , in this activity.    To have an additional assumption with which to work, let us proceed by contradiction and assume that is not continuous at . Why can we then say that there is an so that there is no with the property that implies ?    To create a contradiction, we will construct a sequence that converges to while does not converge to .   Explain why we can find a positive integer such that .   If , explain why there is an element so that .   For , let be any element in . Explain why is a limit of .   Explain why is not a limit of the sequence . What conclusion can we draw, and why?    One way that is often used is illustrated in the next activity.    Let be the function from to , both with the Euclidean metric, defined by   We consider the continuity of at in this activity.    Draw a graph of on some small interval centered at . Based on the graph, do you think has a limit at ? Explain. (There is no right answer here, just your intuition based on the graph.)    At which inputs is ?    Use the result of (b) to find a sequence that converges to for which for every .    What does the result of (c) tell us about the continuity of at ?    While it can sometimes be difficult to prove a fact about all sequences that converge to a point, shows that we can use to prove that a function is not continuous at an input be finding just one sequence that converges to for which . We conclude this section with one final note.   IMPORTANT NOTE:  tells us that if is a continuous function, then commutes with limits. That is, if is a sequence in that converges to , then .  "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "sec_seq_cont_metric.html#activity-36",
  "type": "Activity",
  "number": "9.2",
  "title": "",
  "body": "  A reasonable question to ask is if a limit of a sequence is unique. We will answer that question in this activity. Let be a metric space and a sequence in . Assume the sequence has a limit in . To show that a limit of the sequence is unique, we need to show that if and for some , then .  Suppose and for some . Without much to go on it might appear that proving is a difficult task. However, if for any , then it will have to be the case that . So let .    Why must there exist a positive integer so that for all ?    Why must there exist a positive integer so that for all ?    Now let . What can we say about and ? Why?    Use the triangle inequality to conclude that . What else can we conclude?   "
},
{
  "id": "thm_seq_continuity",
  "level": "2",
  "url": "sec_seq_cont_metric.html#thm_seq_continuity",
  "type": "Theorem",
  "number": "9.7",
  "title": "",
  "body": "  Let and be metric spaces, and let . A function is continuous at if and only if for any sequence in that converges to .    Let and be metric spaces, let , and let be a function. Assume that is continuous at . We will show that for any sequence in that converges to . Let be a sequence in that converges to (we know such a sequence exists, namely the sequence ). To verify that , let . The fact that is continuous at means that there is a so that whenever . Since converges to , we know that there exists a positive integer such that whenever . This implies that .  We conclude that if is continuous at , then for any sequence in that converges to .  The proof of the reverse implication is contained in the next activity.   "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "sec_seq_cont_metric.html#activity-37",
  "type": "Activity",
  "number": "9.3",
  "title": "",
  "body": "  Let and be metric spaces, let , and let be a function. We prove the remaining implication of , that is continuous at if for any sequence in that converges to , in this activity.    To have an additional assumption with which to work, let us proceed by contradiction and assume that is not continuous at . Why can we then say that there is an so that there is no with the property that implies ?    To create a contradiction, we will construct a sequence that converges to while does not converge to .   Explain why we can find a positive integer such that .   If , explain why there is an element so that .   For , let be any element in . Explain why is a limit of .   Explain why is not a limit of the sequence . What conclusion can we draw, and why?   "
},
{
  "id": "act_sequence_continuity",
  "level": "2",
  "url": "sec_seq_cont_metric.html#act_sequence_continuity",
  "type": "Activity",
  "number": "9.4",
  "title": "",
  "body": "  Let be the function from to , both with the Euclidean metric, defined by   We consider the continuity of at in this activity.    Draw a graph of on some small interval centered at . Based on the graph, do you think has a limit at ? Explain. (There is no right answer here, just your intuition based on the graph.)    At which inputs is ?    Use the result of (b) to find a sequence that converges to for which for every .    What does the result of (c) tell us about the continuity of at ?   "
},
{
  "id": "sec_seq_summ",
  "level": "1",
  "url": "sec_seq_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A sequence in a metric space is a function .    A sequence in a metric space has a limit in if, given any there exists a positive integer such that whenever .    Let be a function from a metric space to m metric space . Then is continuous at if and only if for any sequence in that converges to .     "
},
{
  "id": "sec_seq_exer",
  "level": "1",
  "url": "sec_seq_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Determine, with proof, the convergence or divergence of each of the following sequences in the indicated metric spaces.    in     in     is the function defined by where is the set of real valued functions on the interval and the metric is defined by . (See .)    Let be a subset of .   Show that if is bounded above, then there is a sequence in such that .   Show that if is bounded below, then there is a sequence in such that .   Are the limits from (a) or (b) necessarily in ? Explain.    Let be a metric space, let , and let be a nonempty subset of . Recall that the distance from to is . In this exercise we see how we can view the distance between a point and a set in terms of sequences. Let . We will show that there must be a sequence in so that .   For each , let . Why must for each ?   Let for each . What property does this sequence have? Explain how we have just proved the following theorem.    Let be a metric space, let , and let be a nonempty subset of . Then there exists a sequence in such that .      Let be a subspace of . Let , , be a sequence of points in and let . Prove that if in , then in .   Show that the converse of part (a) is false by considering the subspace (the rational numbers) of . Let , , be a sequence of rational numbers such that . Prove that , given , there is a positive integer such that for , . Does the sequence , , converge when considered to be a sequence of points in ?    In this exercise we prove some standard results about limits of sequences from calculus. Let and be convergent sequences in a metric space .   Show that for any real number .   Show that .   Show that the sequence is bounded. That is, show that there is a positive real number such that for all .   Show that .   If for every and , show that .    Let and be continuous functions from to , both with the standard Euclidean metric. Define the function from to by .   Prove that is a continuous function.   Assume that for every . Define the function from to by for every . Use the definition of continuity to prove that is a continuous function.    Let be a sequence in . Show that the sequence converges to a point if and only if converges to and converges to in .    Define by    Show that is continuous at exactly one point. Assume that both copies of are given the Euclidean topology.   Modify the function to construct a new function such that is continuous at exactly the numbers and . Prove your result. Can you see how to extend this to construct a function that is continuous at any given finite number of points?    Let be the set of real valued functions on the interval and let be the metric on defined by . (See .) There is a difference between the point-wise convergence of a sequence of functions and convergence in the metric space that we explore in this exercise. For each , define by .   Let . Show that the sequence where converges to in .   Since the sequence converges to , if we look at the behavior at each point, we might think that the sequence converges to the function defined by Determine if the sequence converges to in the metric space .   Suppose now we consider the sequence as a sequence of functions in , the space of continuous functions from to , using the metric . (Refer to .) The function in is not a continuous function, so can't be a limit of the sequence in . Determine if the sequence has a limit in . If so, what is the limit? If not, verify that the sequence has no limit.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a sequence in with for each and the set is bounded below, then is the limit of the sequence .   Let be a metric space and a nonempty subset of . If and if in contains a point of for every , then there is a sequence in that converges to .   Let be a nonempty subset of that is bounded above and below. If is a nonempty subset of and for all and for all , then .   The sequence converges to in the metric space of all rational numbers in reduced form with metric defined by . (See .)   The only convergent sequences in a metric space with discrete metric are the sequences that are eventually constant. (A sequence in a metric space is eventually constant if there is an element and an such that for all .)   "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-92",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine, with proof, the convergence or divergence of each of the following sequences in the indicated metric spaces.    in     in     is the function defined by where is the set of real valued functions on the interval and the metric is defined by . (See .)  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-93",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a subset of .   Show that if is bounded above, then there is a sequence in such that .   Show that if is bounded below, then there is a sequence in such that .   Are the limits from (a) or (b) necessarily in ? Explain.  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-94",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a metric space, let , and let be a nonempty subset of . Recall that the distance from to is . In this exercise we see how we can view the distance between a point and a set in terms of sequences. Let . We will show that there must be a sequence in so that .   For each , let . Why must for each ?   Let for each . What property does this sequence have? Explain how we have just proved the following theorem.    Let be a metric space, let , and let be a nonempty subset of . Then there exists a sequence in such that .    "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-95",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be a subspace of . Let , , be a sequence of points in and let . Prove that if in , then in .   Show that the converse of part (a) is false by considering the subspace (the rational numbers) of . Let , , be a sequence of rational numbers such that . Prove that , given , there is a positive integer such that for , . Does the sequence , , converge when considered to be a sequence of points in ?  "
},
{
  "id": "ex_limit_properties",
  "level": "2",
  "url": "sec_seq_exer.html#ex_limit_properties",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " In this exercise we prove some standard results about limits of sequences from calculus. Let and be convergent sequences in a metric space .   Show that for any real number .   Show that .   Show that the sequence is bounded. That is, show that there is a positive real number such that for all .   Show that .   If for every and , show that .  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-97",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let and be continuous functions from to , both with the standard Euclidean metric. Define the function from to by .   Prove that is a continuous function.   Assume that for every . Define the function from to by for every . Use the definition of continuity to prove that is a continuous function.  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-98",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be a sequence in . Show that the sequence converges to a point if and only if converges to and converges to in .  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-99",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Define by    Show that is continuous at exactly one point. Assume that both copies of are given the Euclidean topology.   Modify the function to construct a new function such that is continuous at exactly the numbers and . Prove your result. Can you see how to extend this to construct a function that is continuous at any given finite number of points?  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-100",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be the set of real valued functions on the interval and let be the metric on defined by . (See .) There is a difference between the point-wise convergence of a sequence of functions and convergence in the metric space that we explore in this exercise. For each , define by .   Let . Show that the sequence where converges to in .   Since the sequence converges to , if we look at the behavior at each point, we might think that the sequence converges to the function defined by Determine if the sequence converges to in the metric space .   Suppose now we consider the sequence as a sequence of functions in , the space of continuous functions from to , using the metric . (Refer to .) The function in is not a continuous function, so can't be a limit of the sequence in . Determine if the sequence has a limit in . If so, what is the limit? If not, verify that the sequence has no limit.  "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "sec_seq_exer.html#exercise-101",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a sequence in with for each and the set is bounded below, then is the limit of the sequence .   Let be a metric space and a nonempty subset of . If and if in contains a point of for every , then there is a sequence in that converges to .   Let be a nonempty subset of that is bounded above and below. If is a nonempty subset of and for all and for all , then .   The sequence converges to in the metric space of all rational numbers in reduced form with metric defined by . (See .)   The only convergent sequences in a metric space with discrete metric are the sequences that are eventually constant. (A sequence in a metric space is eventually constant if there is an element and an such that for all .)  "
},
{
  "id": "sec_closed_sets_intro",
  "level": "1",
  "url": "sec_closed_sets_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Once we have defined open sets in metric spaces, it is natural to ask if there are closed sets. Recall that closed intervals are important in calculus because every continuous function on a closed interval attains an absolute maximum and absolute minimum value on that interval. If we have closed sets in metric spaces, we might consider if there is some result that is similar to this for continuous functions on closed sets. In this section we introduce the idea of closed sets in metric spaces and discover a few of their properties.  Every interval of the form in is a closed set using the Euclidean metric. What distinguishes these closed intervals from the open intervals is that the open intervals do not contain either of their endpoints this is what makes an open interval a neighborhood of each of its points. In general, what makes open sets open is that they do not contain their boundaries. If an open set doesn't contain its boundary, then its complement, by contrast, should contain its boundary. This leads to the definition of a closed set.   closed subset of a metric space   A subset of a metric space is closed if its complement is open.    We said that open sets are open because they do not contain their boundary and closed sets are closed because they do contain their boundary. However, we did not define what we mean by boundary. The point on the boundary of an open interval of the form in with the Euclidean metric has the property that every open ball that contains contains points in and points not in . This is what makes the point lie on the boundary. We can also think of the point as being at the very limit of the set . This motivates the next definition.   boundary point in a metric space   Let be a metric space, and let be a subset of . A boundary point of is a point such that every neighborhood of contains a point in and a point in .    For example, in as a subset of , the number 0 is a boundary point of because any open interval in that contains contains points in and points not in . Boundary points can arise in other ways. If as a subset of , then 0 is again a boundary point because any open interval in that contains contains a point ( ) in and points not in . However, is the only point in that is contained in any open interval that contains . In this case we call an isolated point of , and in the case of the set we call an accumulation point or a limit point of (the use of the word limit here will become clear later).   accumulation point in a metric space  limit point in a metric space  isolated point in a metric space   Let be a metric space, and let be a subset of .   An accumulation point or limit point of is a point such that every neighborhood of contains a point in different from .    An isolated point of is a point such that there exists a neighborhood of in with .       You might wonder about the use of the term limit point and how limit points might be related to limits. As we will see later, limit points are limits of sequences, but the definition as we have given is one that will translate directly to topological spaces later.  Note that every boundary point is either an accumulation point or an isolated point. The proof is left as an exercise.    For each of the given sets , find all boundary points, limit points, and isolated points. Then determine if the set is a closed set in the metric space . Explain your reasoning.    , , the Euclidean metric, .    , , the Euclidean metric, .    , is the discrete metric defined by and .    Label each of the following statements as either true or false. If true, provide a convincing argument. If false, provide a specific counterexample.   Every limit point is a boundary point.   Every boundary point is a limit point.   Every limit point is an isolated point   Every isolated point is a limit point.   Every boundary point is an isolated point.   Every isolated point is a boundary point.    "
},
{
  "id": "def_closed_metric_space",
  "level": "2",
  "url": "sec_closed_sets_intro.html#def_closed_metric_space",
  "type": "Definition",
  "number": "10.1",
  "title": "",
  "body": " closed subset of a metric space   A subset of a metric space is closed if its complement is open.   "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "sec_closed_sets_intro.html#definition-31",
  "type": "Definition",
  "number": "10.2",
  "title": "",
  "body": " boundary point in a metric space   Let be a metric space, and let be a subset of . A boundary point of is a point such that every neighborhood of contains a point in and a point in .   "
},
{
  "id": "p-1081",
  "level": "2",
  "url": "sec_closed_sets_intro.html#p-1081",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isolated point accumulation point limit point "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "sec_closed_sets_intro.html#definition-32",
  "type": "Definition",
  "number": "10.3",
  "title": "",
  "body": " accumulation point in a metric space  limit point in a metric space  isolated point in a metric space   Let be a metric space, and let be a subset of .   An accumulation point or limit point of is a point such that every neighborhood of contains a point in different from .    An isolated point of is a point such that there exists a neighborhood of in with .      "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "sec_closed_sets_intro.html#exploration-9",
  "type": "Preview Activity",
  "number": "10.1",
  "title": "",
  "body": "  For each of the given sets , find all boundary points, limit points, and isolated points. Then determine if the set is a closed set in the metric space . Explain your reasoning.    , , the Euclidean metric, .    , , the Euclidean metric, .    , is the discrete metric defined by and .    Label each of the following statements as either true or false. If true, provide a convincing argument. If false, provide a specific counterexample.   Every limit point is a boundary point.   Every boundary point is a limit point.   Every limit point is an isolated point   Every isolated point is a limit point.   Every boundary point is an isolated point.   Every isolated point is a boundary point.   "
},
{
  "id": "sec_closed_sets_metric",
  "level": "1",
  "url": "sec_closed_sets_metric.html",
  "type": "Section",
  "number": "",
  "title": "Closed Sets in Metric Spaces",
  "body": " Closed Sets in Metric Spaces  Recall that defines a closed set in a metric space to be a set whose complement is open. We have seen that both and are open subsets of . We now ask the same question, this time in terms of closed sets.    Let be a metric space.    Is closed in ? Explain.    Is closed in ? Explain.    Note that a subset of a metric space can be both open and closed. We call such sets clopen (for closed-open). When we discussed open sets, we saw that an arbitrary union of open sets is open, but that an arbitrary intersection of open sets may not be open (although a finite intersection of open sets is open). Since closed sets are complements of open sets, we should expect a similar result for closed sets.    Let with the Euclidean metric. Let for each , .    What is ? A proof is not necessary.    Is closed in ? Explain.     shows that an arbitrary union of closed sets is not necessarily closed. However, the following theorem tells us what we can say about unions and intersections of closed sets. The results should not be surprising given the relationship between open and closed sets.    Let be a metric space.   Any intersection of closed sets in is a closed set in .    Any finite union of closed sets in is a closed set in .       Let be a metric space. To prove part 1, assume that is a collection of closed sets in for in some indexing set . DeMoivre's Theorem shows that .  The latter is an arbitrary union of open sets and so it an open set. By definition, then, is a closed set.  For part 2, assume that , , , are closed sets in for some . To show that is a closed set, we will show that is an open set. Now is a finite intersection of open sets, and so is an open set. Therefore, is a closed set.    "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "sec_closed_sets_metric.html#activity-39",
  "type": "Activity",
  "number": "10.2",
  "title": "",
  "body": "  Let be a metric space.    Is closed in ? Explain.    Is closed in ? Explain.   "
},
{
  "id": "p-1102",
  "level": "2",
  "url": "sec_closed_sets_metric.html#p-1102",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clopen "
},
{
  "id": "act_Closed_union",
  "level": "2",
  "url": "sec_closed_sets_metric.html#act_Closed_union",
  "type": "Activity",
  "number": "10.3",
  "title": "",
  "body": "  Let with the Euclidean metric. Let for each , .    What is ? A proof is not necessary.    Is closed in ? Explain.   "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "sec_closed_sets_metric.html#theorem-21",
  "type": "Theorem",
  "number": "10.4",
  "title": "",
  "body": "  Let be a metric space.   Any intersection of closed sets in is a closed set in .    Any finite union of closed sets in is a closed set in .       Let be a metric space. To prove part 1, assume that is a collection of closed sets in for in some indexing set . DeMoivre's Theorem shows that .  The latter is an arbitrary union of open sets and so it an open set. By definition, then, is a closed set.  For part 2, assume that , , , are closed sets in for some . To show that is a closed set, we will show that is an open set. Now is a finite intersection of open sets, and so is an open set. Therefore, is a closed set.   "
},
{
  "id": "sec_cont_closed_sets",
  "level": "1",
  "url": "sec_cont_closed_sets.html",
  "type": "Section",
  "number": "",
  "title": "Continuity and Closed Sets",
  "body": " Continuity and Closed Sets  Recall that we showed that a function from a metric space to a metric space is continuous if and only if is open for every open set in . We might conjecture that a similar result holds for closed sets. Since closed sets are complements of open sets, to make this connection we will want to know how is related to for .    Let be a function from a metric space to a metric space , and let be a subset of .    Let .   What does this tell us about ?   What can we conclude about the relationship between and ?    Let .   What does this tell us about ?   What can we conclude about the relationship between and ?    What is the relationship between and ?    Now we can consider the issue of continuity and closed sets.    Let be a function from a metric space to a metric space .    Assume that is continuous and that is a closed set in . How does the result of tell us that is closed in ?    Now assume that is closed in whenever is closed in . How does the result of tell us that is a continuous function?    The result of is summarized in the following theorem.    Let be a function from a metric space to a metric space . Then is continuous if and only if is closed in whenever is a closed set in .    "
},
{
  "id": "act_CS_1",
  "level": "2",
  "url": "sec_cont_closed_sets.html#act_CS_1",
  "type": "Activity",
  "number": "10.4",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space , and let be a subset of .    Let .   What does this tell us about ?   What can we conclude about the relationship between and ?    Let .   What does this tell us about ?   What can we conclude about the relationship between and ?    What is the relationship between and ?   "
},
{
  "id": "act_CS_2",
  "level": "2",
  "url": "sec_cont_closed_sets.html#act_CS_2",
  "type": "Activity",
  "number": "10.5",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space .    Assume that is continuous and that is a closed set in . How does the result of tell us that is closed in ?    Now assume that is closed in whenever is closed in . How does the result of tell us that is a continuous function?   "
},
{
  "id": "thm_closed_sets_continuity_MS",
  "level": "2",
  "url": "sec_cont_closed_sets.html#thm_closed_sets_continuity_MS",
  "type": "Theorem",
  "number": "10.5",
  "title": "",
  "body": "  Let be a function from a metric space to a metric space . Then is continuous if and only if is closed in whenever is a closed set in .   "
},
{
  "id": "sec_limit_bound_iso_seq",
  "level": "1",
  "url": "sec_limit_bound_iso_seq.html",
  "type": "Section",
  "number": "",
  "title": "Limit Points, Boundary Points, Isolated Points, and Sequences",
  "body": " Limit Points, Boundary Points, Isolated Points, and Sequences  Recall that a limit point of a subset of a metric space is a point such that every neighborhood of contains a point in different from . You might wonder about the use of the word limit in the definition of limit point. The next activity should make this clear.    Let be a metric space, let be a subset of , and let be a limit point of .    Let . Explain why must contain a point in different from .    What is ? Why?    The result of is summarized in the following theorem.    Let be a metric space, let be a subset of , and let be a limit point of . Then there is a sequence in that converges to .    Of course, the constant sequence always converges to the point , so every point in a set is the limit of a sequence. With limit points there is a non-constant sequence that converges to the point. We might ask what we can say about a point if the only sequences in that converges to are the eventually constant sequences . (By an eventually constant sequence , we mean that there is a positive integer such that for , we have for some element .) That is the subject of our next activity.    Let be a metric space, and let be a subset of .    Let be an isolated point of . Prove that the only sequences in that converge to are the eventually constant sequences .    Prove that if the only sequences in that converges to are the eventually constant sequences , then is an isolated point of .    Boundary points are points that are, in some sense, situated between a set and its complement. We will make this idea of between more concrete soon.  An argument just like the one in gives us the following result about boundary points.    Let be a metric space, let be a subset of , and let be a boundary point of . Then there are sequences in and in that converge to .    "
},
{
  "id": "act_CS_3",
  "level": "2",
  "url": "sec_limit_bound_iso_seq.html#act_CS_3",
  "type": "Activity",
  "number": "10.6",
  "title": "",
  "body": "  Let be a metric space, let be a subset of , and let be a limit point of .    Let . Explain why must contain a point in different from .    What is ? Why?   "
},
{
  "id": "thm_CS_limit_pt",
  "level": "2",
  "url": "sec_limit_bound_iso_seq.html#thm_CS_limit_pt",
  "type": "Theorem",
  "number": "10.6",
  "title": "",
  "body": "  Let be a metric space, let be a subset of , and let be a limit point of . Then there is a sequence in that converges to .   "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "sec_limit_bound_iso_seq.html#activity-44",
  "type": "Activity",
  "number": "10.7",
  "title": "",
  "body": "  Let be a metric space, and let be a subset of .    Let be an isolated point of . Prove that the only sequences in that converge to are the eventually constant sequences .    Prove that if the only sequences in that converges to are the eventually constant sequences , then is an isolated point of .   "
},
{
  "id": "thm_CS_2",
  "level": "2",
  "url": "sec_limit_bound_iso_seq.html#thm_CS_2",
  "type": "Theorem",
  "number": "10.7",
  "title": "",
  "body": "  Let be a metric space, let be a subset of , and let be a boundary point of . Then there are sequences in and in that converge to .   "
},
{
  "id": "sec_limit_closed",
  "level": "1",
  "url": "sec_limit_closed.html",
  "type": "Section",
  "number": "",
  "title": "Limit Points and Closed Sets",
  "body": " Limit Points and Closed Sets  There is a connection between limit points and closed sets. The open set in does not contain all of its limit points or any of its boundary points, while the closed set contains all of its boundary and limit points. This is an important attribute of closed sets. Recall that for a limit point of a subset of a metric space , every neighborhood of contains a point in different from . We can make the neighborhoods as small as we like so, in a sense, the limit points of that are not in are the points in that are arbitrarily close to the set . We denote the set of limit points of as , and the limit points of a set can tell us if the set is closed.    Let be a subset of a metric space , and let be the set of limit points of . Then is closed if and only if .    Let be a metric space, and let be a subset of . First we assume that is closed and show that contains all of its limit points. Let be a limit point of . We proceed by contradiction and assume that . Then , which is an open set. This implies that there is an so that . But then this neighborhood contains no points in , which contradicts the fact that is a limit point of . We conclude that and contains all of its limit points.  The converse of the result we just proved is the subject of the next activity.      Let be a subset of a metric space , and let be the set of limit points of . In this activity we prove that is closed if contains all of its limit points. So assume .    What do we need to do to show that is closed?    If we proceed by contradiction to prove that is closed, we assume that is not closed. What does this tell us about ?    What does the conclusion of part (b) tells us?    How does the result of (c) contradict the assumption that contains all of its limit points?    "
},
{
  "id": "thm_closed_limitpoints",
  "level": "2",
  "url": "sec_limit_closed.html#thm_closed_limitpoints",
  "type": "Theorem",
  "number": "10.8",
  "title": "",
  "body": "  Let be a subset of a metric space , and let be the set of limit points of . Then is closed if and only if .    Let be a metric space, and let be a subset of . First we assume that is closed and show that contains all of its limit points. Let be a limit point of . We proceed by contradiction and assume that . Then , which is an open set. This implies that there is an so that . But then this neighborhood contains no points in , which contradicts the fact that is a limit point of . We conclude that and contains all of its limit points.  The converse of the result we just proved is the subject of the next activity.   "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "sec_limit_closed.html#activity-45",
  "type": "Activity",
  "number": "10.8",
  "title": "",
  "body": "  Let be a subset of a metric space , and let be the set of limit points of . In this activity we prove that is closed if contains all of its limit points. So assume .    What do we need to do to show that is closed?    If we proceed by contradiction to prove that is closed, we assume that is not closed. What does this tell us about ?    What does the conclusion of part (b) tells us?    How does the result of (c) contradict the assumption that contains all of its limit points?   "
},
{
  "id": "sec_set_closure",
  "level": "1",
  "url": "sec_set_closure.html",
  "type": "Section",
  "number": "",
  "title": "The Closure of a Set",
  "body": " The Closure of a Set  We have seen that the interior of a set is the largest open subset of that set. There is a similar result for closed sets. For example, let in . The set is an open set, but if we union with its limit points, we obtain the closed set . Moreover, The set is the smallest closed set that contains . This leads to the idea of the closure of a set.   closure of a set in a metric space   The closure of a subset of a metric space is the set .    In other words, the closure of a set is the collection of the elements of the set and the limit points of the set those points that are on the edge of the set. The importance of the closure of a set is that the closure of is the smallest closed set that contains .    Let be a metric space and a subset of . The closure of is a closed set. Moreover, the closure of is the smallest closed subset of that contains .    Let be a metric space and a subset of . To prove that is a closed set, we will prove that contains its limit points. Let . To show that , we proceed by contradiction and assume that . This implies that and . Since , there exists a neighborhood of that contains no points of other than . But and , so it follows that . This implies that there is an open ball centered at so that . The fact that means that contains a point in different from . Since , we must have . But this, and the fact that is a neighborhood of , means that must contain a point of different than . But , so we have reached a contradiction. We conclude that and . This shows that is a closed set.  The proof that is the smallest closed subset of that contains is left for the next activity.      Let be a metric space, and let be a subset of .    What will we have to show to prove that is the smallest closed subset of that contains ?    Suppose that is a closed subset of that contains . To show that , why is it enough to demonstrate that ?    If , what can we say about ?    Complete the proof that .    One consequence of is the following.    A subset of a metric space is closed if and only if .    We can also characterize closed sets as sets that contain their boundaries.    The boundary  of a subset of a metric space is the set of all boundary points of .      A subset of a metric space is closed if and only if contains its boundary.    The proof of is left to .  Recall that a boundary point of a subset of a metric space is a point such that every neighborhood of contains a point in and a point in . The boundary points are those that are somehow between a set and its complement. For example if in , the boundary of is the set . We also have that , , and . Notice that . That this is always true is formalized in the next theorem.    Let be a metric space and a subset of . Then .    Let be a metric space and a subset of . To prove we need to verify the containment in each direction. Let and let be a neighborhood of . Then contains a point in and a point in . We consider the cases of or .   Suppose . Then . Also, , so must contain a point in different from . That makes a limit point of and so .    Suppose . Then . Also, , so must contain a point in different from . That makes a limit point of and so .     In either case we have and so .  For the reverse implication, refer to the next activity.      Let be a metric space and a subset of . In this activity we prove that .  Let .    What must be true about , given that is in the intersection of two sets?    Let be a neighborhood of . As we did in the proof of , we consider the cases and .   Suppose . Why must contain a point in and a point not in ? What does this tell us about ?   Suppose . Why must contain a point in and a point not in ? What does this tell us about ?   What can we conclude from parts (i) and (ii)?    "
},
{
  "id": "p-1150",
  "level": "2",
  "url": "sec_set_closure.html#p-1150",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "sec_set_closure.html#definition-33",
  "type": "Definition",
  "number": "10.9",
  "title": "",
  "body": " closure of a set in a metric space   The closure of a subset of a metric space is the set .   "
},
{
  "id": "thm_closure_closed",
  "level": "2",
  "url": "sec_set_closure.html#thm_closure_closed",
  "type": "Theorem",
  "number": "10.10",
  "title": "",
  "body": "  Let be a metric space and a subset of . The closure of is a closed set. Moreover, the closure of is the smallest closed subset of that contains .    Let be a metric space and a subset of . To prove that is a closed set, we will prove that contains its limit points. Let . To show that , we proceed by contradiction and assume that . This implies that and . Since , there exists a neighborhood of that contains no points of other than . But and , so it follows that . This implies that there is an open ball centered at so that . The fact that means that contains a point in different from . Since , we must have . But this, and the fact that is a neighborhood of , means that must contain a point of different than . But , so we have reached a contradiction. We conclude that and . This shows that is a closed set.  The proof that is the smallest closed subset of that contains is left for the next activity.   "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "sec_set_closure.html#activity-46",
  "type": "Activity",
  "number": "10.9",
  "title": "",
  "body": "  Let be a metric space, and let be a subset of .    What will we have to show to prove that is the smallest closed subset of that contains ?    Suppose that is a closed subset of that contains . To show that , why is it enough to demonstrate that ?    If , what can we say about ?    Complete the proof that .   "
},
{
  "id": "corollary-5",
  "level": "2",
  "url": "sec_set_closure.html#corollary-5",
  "type": "Corollary",
  "number": "10.11",
  "title": "",
  "body": "  A subset of a metric space is closed if and only if .   "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "sec_set_closure.html#definition-34",
  "type": "Definition",
  "number": "10.12",
  "title": "",
  "body": "  The boundary  of a subset of a metric space is the set of all boundary points of .   "
},
{
  "id": "thm_Closed_boundary",
  "level": "2",
  "url": "sec_set_closure.html#thm_Closed_boundary",
  "type": "Theorem",
  "number": "10.13",
  "title": "",
  "body": "  A subset of a metric space is closed if and only if contains its boundary.   "
},
{
  "id": "thm_Bd_between",
  "level": "2",
  "url": "sec_set_closure.html#thm_Bd_between",
  "type": "Theorem",
  "number": "10.14",
  "title": "",
  "body": "  Let be a metric space and a subset of . Then .    Let be a metric space and a subset of . To prove we need to verify the containment in each direction. Let and let be a neighborhood of . Then contains a point in and a point in . We consider the cases of or .   Suppose . Then . Also, , so must contain a point in different from . That makes a limit point of and so .    Suppose . Then . Also, , so must contain a point in different from . That makes a limit point of and so .     In either case we have and so .  For the reverse implication, refer to the next activity.   "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "sec_set_closure.html#activity-47",
  "type": "Activity",
  "number": "10.10",
  "title": "",
  "body": "  Let be a metric space and a subset of . In this activity we prove that .  Let .    What must be true about , given that is in the intersection of two sets?    Let be a neighborhood of . As we did in the proof of , we consider the cases and .   Suppose . Why must contain a point in and a point not in ? What does this tell us about ?   Suppose . Why must contain a point in and a point not in ? What does this tell us about ?   What can we conclude from parts (i) and (ii)?   "
},
{
  "id": "sec_closed_limits_seq",
  "level": "1",
  "url": "sec_closed_limits_seq.html",
  "type": "Section",
  "number": "",
  "title": "Closed Sets and Limits of Sequences",
  "body": " Closed Sets and Limits of Sequences  Suppose we consider a sequence in a subset of a metric space that converges to a point . Must it be the case that ? We consider this question in the next activity.    Let and in . For each positive integer , let . Note that the sequence is contained in both sets and .    To what does the sequence converge in ?    Is in ?    Is ?    Name two significant differences between the sets and that account for the different responses in parts (b) and ? Respond using the terminology we have introduced in this section.    The result of is encapsulated in the next theorem.    A subset of a metric space is closed if and only if whenever is a sequence in that converges to a point , then .    Let be a metric space and a subset of . First assume that is closed. Let be a convergent sequence in with . So either or is a limit point of . Since contains its limit points, either case gives us . So .  The proof of the remaining implication is left to the next activity.      Let be a metric space and a subset of . In this activity we will prove that if any time a sequence in converges to a point , the point is in , then is a closed set.    List three different ways that we can show that a subset of a metric space is closed. Which one might be relevant in this situation to show that the set is closed?    Let be a limit point of . What does that tell us?    Complete the proof that is a closed set.    "
},
{
  "id": "act_closed_limitpoints",
  "level": "2",
  "url": "sec_closed_limits_seq.html#act_closed_limitpoints",
  "type": "Activity",
  "number": "10.11",
  "title": "",
  "body": "  Let and in . For each positive integer , let . Note that the sequence is contained in both sets and .    To what does the sequence converge in ?    Is in ?    Is ?    Name two significant differences between the sets and that account for the different responses in parts (b) and ? Respond using the terminology we have introduced in this section.   "
},
{
  "id": "thm_Closed_convergent",
  "level": "2",
  "url": "sec_closed_limits_seq.html#thm_Closed_convergent",
  "type": "Theorem",
  "number": "10.15",
  "title": "",
  "body": "  A subset of a metric space is closed if and only if whenever is a sequence in that converges to a point , then .    Let be a metric space and a subset of . First assume that is closed. Let be a convergent sequence in with . So either or is a limit point of . Since contains its limit points, either case gives us . So .  The proof of the remaining implication is left to the next activity.   "
},
{
  "id": "activity-49",
  "level": "2",
  "url": "sec_closed_limits_seq.html#activity-49",
  "type": "Activity",
  "number": "10.12",
  "title": "",
  "body": "  Let be a metric space and a subset of . In this activity we will prove that if any time a sequence in converges to a point , the point is in , then is a closed set.    List three different ways that we can show that a subset of a metric space is closed. Which one might be relevant in this situation to show that the set is closed?    Let be a limit point of . What does that tell us?    Complete the proof that is a closed set.   "
},
{
  "id": "sec_closed_set_summ",
  "level": "1",
  "url": "sec_closed_set_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   Let be a metric space and a subset of .   A point is a boundary point of if every neighborhood of contains a point in and a point in .    A point is a limit point of if every neighborhood of contains a point in different from .    A point is an isolated point of if there is a neighborhood of such that .   Boundary points and limit points don't need to be in the set , whereas an isolated point of must be in . In as a subset of , is a boundary point but not an isolated point while is a boundary point but not a limit point. Also, is a limit point but neither a boundary or isolated point. With as subset of with the discrete metric, every point of is an isolated point but no point in is a boundary point or a limit point of . So even though every boundary point is either a limit point or an isolated point, the three concepts are different.    A subset of a metric space is closed if is an open set.    Any intersection of closed sets is closed while finite unions of closed sets are closed.    A function from a metric space to a metric space is continuous if is a closed set in whenever is a closed set in .    Let be a metric space, let be a subset of , and let be a limit point of . Then there is a sequence in that converges to .    Let be a metric space, let be a subset of , and let be a boundary point of . Then there are sequences in and in that converge to .    The boundary of a subset of a metric space is the set of boundary points of .    A subset of a metric space is closed if and only if contains all of its limit points. Similarly, is closed if and only if contains all of its boundary points.    The set of all limit points of a subset of a metric space is denoted by . The closure of is the set . The closure of is the smallest closed set in that contains .    A subset of a metric space is closed if and only if is in whenever is a convergent sequence in .     "
},
{
  "id": "sec_closed_set_exer",
  "level": "1",
  "url": "sec_closed_set_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Informal, but convincing, arguments suffice for this problem.   Let as a subset of . Note that is the unit disk in the plane. Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.   Let , the set of rational numbers, as a subset of . Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.   Let as a subset of . Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.    Let be a metric space. Let , and let . We know that the open ball is an open set. Let . Prove or disprove: is a closed set in .    Let be a metric space. We have seen that it is possible for a subset of to be both open and closed. There is a characterization of sets that are both open and closed in terms of their boundaries. Find and prove such a characterization. (Your statement should have the form: A subset of a metric space is both open and closed if and only if the boundary of is .)    Let be a subset of a metric space. Let be the set of limit points of and the set of isolated points of . Prove the following.                if and only if there is a sequence of points of which converges to     is the intersection of all closed sets that contain     is the union of all open sets contained in     is the disjoint union of and             Let be a metric space and a subset of . Prove that a point is a limit point of if and only if every open ball centered at contains a point in different from .    Let be a subset of a metric space. Let be the set of limit points of and the set of isolated points of .   Prove that and .   Prove that if and only if there is a sequence of points of which converges to .   Prove that if is a closed set such that , then . Then prove that is the intersection of all such closed sets and hence is closed.    Prove that if is a subset of a metric space and is a boundary point of , then there are sequences in and in that converge to .    Recall that the distance from a point in a metric space to a nonempty subset of is . Prove that a subset of a metric space is closed if and only if whenever and , then .    Let be a metric space. In this exercise we show that some subsets of , other than and must be closed. Show that any finite subset of is closed.   What are the limits points of a finite subset?    Prove that a subset of a metric space is closed if and only if contains its boundary.    Let and be metric space and let be a function.   Prove that is continuous if and only if for any subset of .   Give an example where the containment, and not the equality, in (a) is the best we can do.   Give an example to show that the equality in (a) can actually be achieved.    Let be a metric space and let be a subset of . Prove that every boundary point of is either a limit point or an isolated point of .    Let be a metric space, and let and be subsets of .   Is it the case that ? If true, prove it. If false, show why and prove any containment that is true.   Is it the case that ? If true, prove it. If false, show why and prove any containment that is true.    Recall that an infinite union of closed sets in a metric space may not be closed, and that an infinite intersection of open sets in a metric space may not be open. In this exercise we explore situations in which we can conclude that an infinite union of closed sets is closed and an infinite intersection of open sets is open. Let be a metric space.   We first establish a preliminary result. Let be a closed subset of and . Prove that if , then .   Let be a collection of closed subsets of for in some indexing set with the property that given any , there exists an such that intersects at most finitely many of the sets . Prove that is closed.   Determine and prove an analogous statement for open sets in .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a point in a metric space , then the singleton set is closed.   The only subsets of that are both open and closed under the standard metric are and .   If is the metric space with and , then the set is both open and closed in .   If is a metric space and , then .   The boundary of any subset of a metric space is a closed set.   If is a subset of a metric space , then where is the set of limit points of and is the set of isolated points of    "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-102",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Informal, but convincing, arguments suffice for this problem.   Let as a subset of . Note that is the unit disk in the plane. Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.   Let , the set of rational numbers, as a subset of . Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.   Let as a subset of . Determine all of the interior points, boundary points, accumulation points, and isolated points of . Give reasons for your conclusions. Is an open set? Is a closed set? Explain.  "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-103",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a metric space. Let , and let . We know that the open ball is an open set. Let . Prove or disprove: is a closed set in .  "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-104",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a metric space. We have seen that it is possible for a subset of to be both open and closed. There is a characterization of sets that are both open and closed in terms of their boundaries. Find and prove such a characterization. (Your statement should have the form: A subset of a metric space is both open and closed if and only if the boundary of is .)  "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-105",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be a subset of a metric space. Let be the set of limit points of and the set of isolated points of . Prove the following.                if and only if there is a sequence of points of which converges to     is the intersection of all closed sets that contain     is the union of all open sets contained in     is the disjoint union of and           "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-106",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let be a metric space and a subset of . Prove that a point is a limit point of if and only if every open ball centered at contains a point in different from .  "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-107",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be a subset of a metric space. Let be the set of limit points of and the set of isolated points of .   Prove that and .   Prove that if and only if there is a sequence of points of which converges to .   Prove that if is a closed set such that , then . Then prove that is the intersection of all such closed sets and hence is closed.  "
},
{
  "id": "ex_CS_2",
  "level": "2",
  "url": "sec_closed_set_exer.html#ex_CS_2",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Prove that if is a subset of a metric space and is a boundary point of , then there are sequences in and in that converge to .  "
},
{
  "id": "ex_distance_pt_to_set",
  "level": "2",
  "url": "sec_closed_set_exer.html#ex_distance_pt_to_set",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Recall that the distance from a point in a metric space to a nonempty subset of is . Prove that a subset of a metric space is closed if and only if whenever and , then .  "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-110",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a metric space. In this exercise we show that some subsets of , other than and must be closed. Show that any finite subset of is closed.   What are the limits points of a finite subset?  "
},
{
  "id": "ex_closed_bounded",
  "level": "2",
  "url": "sec_closed_set_exer.html#ex_closed_bounded",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Prove that a subset of a metric space is closed if and only if contains its boundary.  "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-112",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let and be metric space and let be a function.   Prove that is continuous if and only if for any subset of .   Give an example where the containment, and not the equality, in (a) is the best we can do.   Give an example to show that the equality in (a) can actually be achieved.  "
},
{
  "id": "ex_MS_boundary_limit_isolated",
  "level": "2",
  "url": "sec_closed_set_exer.html#ex_MS_boundary_limit_isolated",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let be a metric space and let be a subset of . Prove that every boundary point of is either a limit point or an isolated point of .  "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-114",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let be a metric space, and let and be subsets of .   Is it the case that ? If true, prove it. If false, show why and prove any containment that is true.   Is it the case that ? If true, prove it. If false, show why and prove any containment that is true.  "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-115",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Recall that an infinite union of closed sets in a metric space may not be closed, and that an infinite intersection of open sets in a metric space may not be open. In this exercise we explore situations in which we can conclude that an infinite union of closed sets is closed and an infinite intersection of open sets is open. Let be a metric space.   We first establish a preliminary result. Let be a closed subset of and . Prove that if , then .   Let be a collection of closed subsets of for in some indexing set with the property that given any , there exists an such that intersects at most finitely many of the sets . Prove that is closed.   Determine and prove an analogous statement for open sets in .  "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "sec_closed_set_exer.html#exercise-116",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a point in a metric space , then the singleton set is closed.   The only subsets of that are both open and closed under the standard metric are and .   If is the metric space with and , then the set is both open and closed in .   If is a metric space and , then .   The boundary of any subset of a metric space is a closed set.   If is a subset of a metric space , then where is the set of limit points of and is the set of isolated points of   "
},
{
  "id": "sec_sub_metric_intro",
  "level": "1",
  "url": "sec_sub_metric_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Let be a metric space, and let be a subset of . We can make into a metric space itself in a very straightforward manner. When we do so, we say that is a subspace of .    Let be a metric space, and let be a subset of . To make the subset into a metric space, we need to define a metric on . For us to consider as a subspace of , we want the metric on to agree with the metric on . So we define by for all . Note that and are different functions because they have different domains.    Show that is a metric on . Since is a metric on it follows that is a metric space. The metric is the restriction of to and can also be denoted by .   subspace of a metric space   Let be a metric space. A subspace of is a subset of together with the metric from to defined by for all .    We might wonder what, if any, properties of the space are inherited by a subspace.    Let and let . Let . Is the set open in ? Is the set open in ? Explain.    Let and let . What are the open subsets of ? Explain.    Let , let (the -axis in ), and let . Note that and we can consider as a subspace of and , and as a subspace of .   Explain why is a closed subset of .   Explain why is an open subset of .   Is an open subset of ? Explain    "
},
{
  "id": "p-1257",
  "level": "2",
  "url": "sec_sub_metric_intro.html#p-1257",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "sec_sub_metric_intro.html#exploration-10",
  "type": "Preview Activity",
  "number": "11.1",
  "title": "",
  "body": "  Let be a metric space, and let be a subset of . To make the subset into a metric space, we need to define a metric on . For us to consider as a subspace of , we want the metric on to agree with the metric on . So we define by for all . Note that and are different functions because they have different domains.    Show that is a metric on . Since is a metric on it follows that is a metric space. The metric is the restriction of to and can also be denoted by .   subspace of a metric space   Let be a metric space. A subspace of is a subset of together with the metric from to defined by for all .    We might wonder what, if any, properties of the space are inherited by a subspace.    Let and let . Let . Is the set open in ? Is the set open in ? Explain.    Let and let . What are the open subsets of ? Explain.    Let , let (the -axis in ), and let . Note that and we can consider as a subspace of and , and as a subspace of .   Explain why is a closed subset of .   Explain why is an open subset of .   Is an open subset of ? Explain   "
},
{
  "id": "sec_open_closed_sub",
  "level": "1",
  "url": "sec_open_closed_sub.html",
  "type": "Section",
  "number": "",
  "title": "Open and Closed Sets in Subspaces",
  "body": " Open and Closed Sets in Subspaces  We saw in our preview activity that a subspace does not necessarily inherit the properties of the larger space. For example, a subset of a subspace might be open in the subspace, but not open in the larger space. However, there is a connection between the open subsets in a subspace and the open sets in the larger space.    Let be a metric space and a subset of . A subset of is open in if and only if there is an open set in so that .    Let be a metric space and a subset of . Let be an open subset of . So for each there is a so that , where is the open ball in centered at of radius . Then, . Now let be the open ball in centered at of radius , and let . Note that .  As a union of open balls in , the set is open in . Now .  So there is an open set in such that .  For the reverse implication, see the following activity.      Let be a metric space and a subset of . Suppose that for some set that is open in . In this activity we will prove that is an open subset of .    Let . Explain why there must exist a such that , the open ball in of radius around in , is a subset of .    What would be a natural candidate for an open ball in centered at that is contained in ? Prove your conjecture.    What conclusion can we draw?    We might now wonder about closed sets in a subspace. If is a metric space and is a subspace, then by definition a subset of is closed if and only if for some set that is open in . The analogy of is true for closed sets in subspaces.    Let be a metric space and a subset of . A subset of is closed in if and only if there is a closed set in so that .    The proof is left to .  "
},
{
  "id": "thm_relatively_open_ms",
  "level": "2",
  "url": "sec_open_closed_sub.html#thm_relatively_open_ms",
  "type": "Theorem",
  "number": "11.2",
  "title": "",
  "body": "  Let be a metric space and a subset of . A subset of is open in if and only if there is an open set in so that .    Let be a metric space and a subset of . Let be an open subset of . So for each there is a so that , where is the open ball in centered at of radius . Then, . Now let be the open ball in centered at of radius , and let . Note that .  As a union of open balls in , the set is open in . Now .  So there is an open set in such that .  For the reverse implication, see the following activity.   "
},
{
  "id": "activity-50",
  "level": "2",
  "url": "sec_open_closed_sub.html#activity-50",
  "type": "Activity",
  "number": "11.2",
  "title": "",
  "body": "  Let be a metric space and a subset of . Suppose that for some set that is open in . In this activity we will prove that is an open subset of .    Let . Explain why there must exist a such that , the open ball in of radius around in , is a subset of .    What would be a natural candidate for an open ball in centered at that is contained in ? Prove your conjecture.    What conclusion can we draw?   "
},
{
  "id": "thm_relatively_closed_ms",
  "level": "2",
  "url": "sec_open_closed_sub.html#thm_relatively_closed_ms",
  "type": "Theorem",
  "number": "11.3",
  "title": "",
  "body": "  Let be a metric space and a subset of . A subset of is closed in if and only if there is a closed set in so that .   "
},
{
  "id": "sec_prod_metric",
  "level": "1",
  "url": "sec_prod_metric.html",
  "type": "Section",
  "number": "",
  "title": "Products of Metric Spaces",
  "body": " Products of Metric Spaces  If we have two metric spaces and , we might wonder if we can make the set into a metric space. A natural approach might be to define a function by for and in . However, this does not define a metric. For example, if and in , then even though . To make a metric, we can take a clue from the Euclidean metric on . On , the metric has the form , while on the metric is .  So on and we could consider defining by .    In this activity we verify some of the properties that make as defined in a metric. Let and be in     Explain why is greater than or equal to .    Explain why .    Explain why if and only if .     provides three of the four items that are necessary to prove that as defined in is a metric. We verify the last property, the triangle inequality, now.  Let and be defined as in , and let be in . Then . Since all terms are non-negative we conclude that .  We conclude that as defined in is a metric on , and so we can make the product of any two metric spaces into a metric space.  In the next activity we consider products of open balls and open sets in products of metric spaces.    Let and as subspaces of using the Euclidean metric.    Explain in detail what the product space looks like.    If is an open ball in and is an open ball in , is an open ball in ? Explain.    If is an open ball in and is an open ball in , is an open set in ? Explain.    Find, if possible, an open subset of that is not of the form where is open in and is open in .     shows that open sets in a product are more complicated than just products of open sets in the factors. We will return to product later when we consider topological spaces.  We conclude with one final comment about products. We can make the Cartesian product of any number of metric spaces into a metric space with the same construction we used for the product of two spaces.   product metric space   Let be metric spaces for from to some positive integer . The product metric space  is the Cartesian product with metric defined by when and are in .     product metric  coordinate space  factor space The metric is called the product metric and the spaces are called the coordinate or factor spaces of . The proof that is a metric is essentially the same as in the case, and is left to .  "
},
{
  "id": "act_metric_space_products",
  "level": "2",
  "url": "sec_prod_metric.html#act_metric_space_products",
  "type": "Activity",
  "number": "11.3",
  "title": "",
  "body": "  In this activity we verify some of the properties that make as defined in a metric. Let and be in     Explain why is greater than or equal to .    Explain why .    Explain why if and only if .   "
},
{
  "id": "act_ms_product_open",
  "level": "2",
  "url": "sec_prod_metric.html#act_ms_product_open",
  "type": "Activity",
  "number": "11.4",
  "title": "",
  "body": "  Let and as subspaces of using the Euclidean metric.    Explain in detail what the product space looks like.    If is an open ball in and is an open ball in , is an open ball in ? Explain.    If is an open ball in and is an open ball in , is an open set in ? Explain.    Find, if possible, an open subset of that is not of the form where is open in and is open in .   "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "sec_prod_metric.html#definition-36",
  "type": "Definition",
  "number": "11.4",
  "title": "",
  "body": " product metric space   Let be metric spaces for from to some positive integer . The product metric space  is the Cartesian product with metric defined by when and are in .   "
},
{
  "id": "p-1299",
  "level": "2",
  "url": "sec_prod_metric.html#p-1299",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product metric coordinate factor "
},
{
  "id": "sec_sub_metric_summ",
  "level": "1",
  "url": "sec_sub_metric_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A subset of a metric space is a metric space, called a subspace, by using the metric on .    If is a metric space and is a subspace of , a subset of is open in if and only if for some open set in . A subset of is closed in if for open set in . Alternatively, a set is closed in if for some closed set in .    Let be metric spaces for from to some positive integer . The product metric space is the Cartesian product with metric defined by when and are in .     "
},
{
  "id": "sec_sub_metric_exer",
  "level": "1",
  "url": "sec_sub_metric_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Determine if the following sets are open in the subspace of the topological space .    in     in     in     Let be an open set in a metric space . Show that a subset of is open in if and only if is open in .    Let and be metric spaces, and let be a continuous function. If is a subspace of , must the restriction of to mapping to be continuous? Give a proof that the restriction is continuous, or an example to show that the restriction need not be continuous.    Prove . That is, let be a metric space and a subset of . Prove that a subset of is closed in if and only if there is a closed set in so that .    Let and be metric spaces. Prove or disprove: the function defined by is a metric on .    Let be metric spaces for from to some positive integer . Let be defined when and are in . Show that is a metric on .    Let be a non-decreasing sequence of real numbers that is bounded above. That is, for every and there is a positive real number such that for every . Show that the sequence converges.   Hilbert space  It is possible to consider infinite products as metric spaces. One important example is a Hilbert space , which consists of all infinite sequences where for every and is finite. Hilbert space has important applications in physics, particularly in quantum mechanics.   Give two distinct elements in and one infinite sequence that is not in . Explain your examples.   We define the norm of an element in as . From this norm we can define a distance between elements and in as follows: , where . Another way to write is . One potential problem with this function is that we need to know that if and are in , then . That is, show that if and are finite, then is also finite.   Consider a finite sum and use .   Show that is a metric on .   Let . Let be defined by . Show that is a bijection such that for any elements , in . So is essentially the same as and so we can consider the space as embedded in as a subspace of for every .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is the discrete metric on a metric space , then for any subspace of , the restriction of to is the discrete metric.   If is a metric on a space that is not the discrete metric, and if is a subset of , then cannot be the discrete metric.   Let be a subspace of a metric space . If a sequence is in and for some , then in .   Let be a subspace of a metric space . If a sequence is in and for some , then in .   If and are metric spaces, then the function defined by is a metric on .   If and are metric spaces, then the function defined by is a metric on .   "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-117",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine if the following sets are open in the subspace of the topological space .    in     in     in   "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-118",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be an open set in a metric space . Show that a subset of is open in if and only if is open in .  "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-119",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be metric spaces, and let be a continuous function. If is a subspace of , must the restriction of to mapping to be continuous? Give a proof that the restriction is continuous, or an example to show that the restriction need not be continuous.  "
},
{
  "id": "ex_relatively_closed_ms",
  "level": "2",
  "url": "sec_sub_metric_exer.html#ex_relatively_closed_ms",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove . That is, let be a metric space and a subset of . Prove that a subset of is closed in if and only if there is a closed set in so that .  "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-121",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let and be metric spaces. Prove or disprove: the function defined by is a metric on .  "
},
{
  "id": "ex_prod_metric",
  "level": "2",
  "url": "sec_sub_metric_exer.html#ex_prod_metric",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be metric spaces for from to some positive integer . Let be defined when and are in . Show that is a metric on .  "
},
{
  "id": "ex_Subspace_monotone_convergence",
  "level": "2",
  "url": "sec_sub_metric_exer.html#ex_Subspace_monotone_convergence",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be a non-decreasing sequence of real numbers that is bounded above. That is, for every and there is a positive real number such that for every . Show that the sequence converges.  "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-124",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "Hilbert space  It is possible to consider infinite products as metric spaces. One important example is a Hilbert space , which consists of all infinite sequences where for every and is finite. Hilbert space has important applications in physics, particularly in quantum mechanics.   Give two distinct elements in and one infinite sequence that is not in . Explain your examples.   We define the norm of an element in as . From this norm we can define a distance between elements and in as follows: , where . Another way to write is . One potential problem with this function is that we need to know that if and are in , then . That is, show that if and are finite, then is also finite.   Consider a finite sum and use .   Show that is a metric on .   Let . Let be defined by . Show that is a bijection such that for any elements , in . So is essentially the same as and so we can consider the space as embedded in as a subspace of for every .  "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "sec_sub_metric_exer.html#exercise-125",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is the discrete metric on a metric space , then for any subspace of , the restriction of to is the discrete metric.   If is a metric on a space that is not the discrete metric, and if is a subset of , then cannot be the discrete metric.   Let be a subspace of a metric space . If a sequence is in and for some , then in .   Let be a subspace of a metric space . If a sequence is in and for some , then in .   If and are metric spaces, then the function defined by is a metric on .   If and are metric spaces, then the function defined by is a metric on .  "
},
{
  "id": "sec_top_space_intro",
  "level": "1",
  "url": "sec_top_space_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Many of the properties that we introduced in metric spaces (continuity, limit points, boundary) could be phrased in terms of the open sets in the space. With that in mind, we can broaden our concept of space by eliminating the metric and just defining the opens sets in the space. This produces what are called topological spaces .  Recall that the open sets in a metric space satisfied certain properties, including that the arbitrary union of open sets is open and any finite intersection of opens sets is open. We will now take these properties as our axioms in defining topological spaces.   topology   Let be a nonempty set. A set The symbol is the Greek lowercase letter tau. of subsets of is said to be a topology on if    and belong to ,    any union of sets in is a set in , and    any finite intersection of sets in is a set in .        topological space  open sets in a topological space A topological space is then any set on which a topology is defined. If is the space and a topology on , we denote the topological space as . The elements of are called the open sets in the topological space. When the topology is clear from the context, we simple refer to as the topological space. Some examples are in order.    Suppose . Is the set a topology on ? Justify your response.    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?.    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?    Let be the collection of finite subsets of . Let . First, list three members of and three sets that are not in . Next, is a topology on ? Justify your response.    Let . Is a topology on ? Justify your response.    Let be a set and let . Is a topology on ? Justify your response.    Let be a set and let be the collection of all subsets of . Is a topology on ? Justify your response.    "
},
{
  "id": "p-1333",
  "level": "2",
  "url": "sec_top_space_intro.html#p-1333",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topological spaces "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "sec_top_space_intro.html#definition-37",
  "type": "Definition",
  "number": "12.1",
  "title": "",
  "body": " topology   Let be a nonempty set. A set The symbol is the Greek lowercase letter tau. of subsets of is said to be a topology on if    and belong to ,    any union of sets in is a set in , and    any finite intersection of sets in is a set in .      "
},
{
  "id": "p-1339",
  "level": "2",
  "url": "sec_top_space_intro.html#p-1339",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topological space open sets "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "sec_top_space_intro.html#exploration-11",
  "type": "Preview Activity",
  "number": "12.1",
  "title": "",
  "body": "  Suppose . Is the set a topology on ? Justify your response.    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?.    Suppose . Is the collection of subsets consisting of a topology on ? Justify your response. If not, what is the smallest collection of subsets of that need to be added to to make a topology on ?    Let be the collection of finite subsets of . Let . First, list three members of and three sets that are not in . Next, is a topology on ? Justify your response.    Let . Is a topology on ? Justify your response.    Let be a set and let . Is a topology on ? Justify your response.    Let be a set and let be the collection of all subsets of . Is a topology on ? Justify your response.   "
},
{
  "id": "sec_exam_top",
  "level": "1",
  "url": "sec_exam_top.html",
  "type": "Section",
  "number": "",
  "title": "Examples of Topologies",
  "body": " Examples of Topologies  In our preview activity we saw several examples of topologies. Suppose is a nonempty set.   topology discrete  The topology consisting of all subsets of is called the discrete topology .    topology indiscrete  The topology is the indiscrete topology .    topology metric  If is a metric space, then the collection consisting of unions of all open balls is a topology called the metric topology . This result tells us that every metric space is topological space under the metric topology. We will see later than not every topological space is a metric space.     The discrete and indiscrete topologies are topologies that can be defined on any set and are often used to use to generate examples. Another topology that can be defined on any set is in the next activity.     Let be any set and let consist of the empty set along with all subsets of such that is finite.    Prove that is a topology on . (The topology is called the finite complement topology topology finite complement or the cofinite topology . topology cofinite     Explain why is the discrete topology when is finite.    "
},
{
  "id": "p-1348",
  "level": "2",
  "url": "sec_exam_top.html#p-1348",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete topology indiscrete topology metric topology "
},
{
  "id": "act_TS_limits1",
  "level": "2",
  "url": "sec_exam_top.html#act_TS_limits1",
  "type": "Activity",
  "number": "12.2",
  "title": "",
  "body": "  Let be any set and let consist of the empty set along with all subsets of such that is finite.    Prove that is a topology on . (The topology is called the finite complement topology topology finite complement or the cofinite topology . topology cofinite     Explain why is the discrete topology when is finite.   "
},
{
  "id": "sec_base_top",
  "level": "1",
  "url": "sec_base_top.html",
  "type": "Section",
  "number": "",
  "title": "Bases for Topologies",
  "body": " Bases for Topologies  It can be difficult to completely describe the open sets in a topology. Instead, we can describe the topology using a collection of sets that generate the topology. For example, if is a metric space then the collection of open sets in forms a topology on , called the metric topology. We also saw that in a metric space, every open set in is a union of open balls. For that reason we called the collection of open balls a basis for the open sets in . We can do the same thing in any topological space. As a non-trivial example, an interesting topology defined on the positive integers is due to S.W. Golomb. One can use this topology to prove that there are infinitely many primes. This topology also makes the positive integers into a connected Hausdorff space (more on these concepts later). The Golomb topology is defined as follows. If and are coprime integers in (that is, and have no common positive factors other than 1 so that the greatest common divisor of and is ), let .   Golomb space The collection of sets is a basis for the Golomb topology, and the topological space is called the Golomb space . It is an exercise in number theory to prove that the sets form a basis for a topology, so we will not go into the details.   Let and let . You may assume that is a topology on . Explain why any nonempty open set in the topological space can be written in terms of arbitrary unions and finite intersections of , , and .    shows that, just like the open balls in a metric space, a topology can have a collection of subsets whose unions make up all of the open sets in the topology. We do need to take a little care, though. A basis will generate the collection of open sets for a topology, so the basis sets we start with should themselves be open sets. In addition, every element in the topological space should be an element of one of the basis sets, and since the basis elements are to produce all of the open sets in the topology, every set in the topology (except the empty set) should be a union of sets in a basis. It also must be the case that we can ensure that any finite intersection of sets in the topology remains a set in the topology when we write the sets in the topology in terms of the sets in a basis. To make the last two conditions happen, we will see that it is enough to insist that for any point in the intersection of basis elements, there is another basis element in that intersection that contains the point. This is summarized in .    Let be a set and let be a collection of subsets of such that   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .     Then the set that consists of the empty set and unions of elements of is a topology on .    Before we prove , we will need to know one fact about the set .    Let be a set and a collection of subsets of such that    For each , there is a set in that contains .    If is an element of for some , then there is a set such that .  Let , , , be in . Our goal in this activity is to extend property 2 and show that if , then there is a set such that and .   Since the statement we want to prove depends on a positive integer , we will use mathematical induction. Explain why the and cases are true.   What is the inductive hypothesis and what do we want to prove in the inductive step?   Use the inductive hypothesis and condition 2 to complete the proof of the following lemma.    Let be a set and a collection of subsets of such that   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .     Let , , , be in . If , then there is a set such that and .     Now we can prove .   Let be a topological space, and let and satisfy the given conditions. By definition, . For each there is a set such that . Then , and . To complete our proof that is a topology on , we need to demonstrate that is closed under arbitrary unions and finite intersections. We first consider unions. Let be a collection of sets in for in some indexing set . By definition, each is empty or is a union of elements of . So either is empty, or is a union of sets in . Thus, and is closed under arbitrary unions.  Now we show that is closed under finite intersections. Let be a positive integer and let a collection of sets in for . Let . If for any , then is in . So suppose that for each between and . Let . Then for each . For every between and , the fact that is a union of elements in implies that there exists with . Thus, .   shows that there is a set such that and . Since is an arbitrary element of , we must have . But each is subset of , so . It follows that and . Therefore, is a topology on .   Any collection of sets as given in is given a special name.   basis for a topology   Let be a set. A set is a basis for a topology (or just a basis ) on if   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .        basis elements  basic open set The elements of a basis are called basis elements or the basic open sets . A basis for a topology on a set defines a topology on as shown in .  Note that because of property (1) of , the union of the sets in the basis must contain . In other words, the sets in a basis cover the space. The second property ensures that if a point is in the intersection of two basic open sets, then there is a smaller basic open set that contains .   topology generated by a basis   Let be a basis for a topology on a set . The topology generated by contains the empty set and all arbitrary unions of basis elements.    When the topology for a space is clear from the context, we also call a basis for the topology a basis for .    Let and .   Is the set a basis for ? If not, add the smallest number of sets that you can to to make a basis for this topology.   Is the set a basis for ? If not, add the smallest number of sets that you can to to make a basis for this topology.    Let and let have the discrete topology (the topology consisting of all subsets of ). Is a basis for in the the discrete topology? If not, add the smallest number of sets that you can to to make a basis for this topology.    Find a basis for the discrete topology on any set .    "
},
{
  "id": "p-1356",
  "level": "2",
  "url": "sec_base_top.html#p-1356",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric basis "
},
{
  "id": "p-1357",
  "level": "2",
  "url": "sec_base_top.html#p-1357",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Golomb space "
},
{
  "id": "act_top_basis",
  "level": "2",
  "url": "sec_base_top.html#act_top_basis",
  "type": "Activity",
  "number": "12.3",
  "title": "",
  "body": " Let and let . You may assume that is a topology on . Explain why any nonempty open set in the topological space can be written in terms of arbitrary unions and finite intersections of , , and .  "
},
{
  "id": "thm_Basis",
  "level": "2",
  "url": "sec_base_top.html#thm_Basis",
  "type": "Theorem",
  "number": "12.2",
  "title": "",
  "body": "  Let be a set and let be a collection of subsets of such that   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .     Then the set that consists of the empty set and unions of elements of is a topology on .   "
},
{
  "id": "act_Basis",
  "level": "2",
  "url": "sec_base_top.html#act_Basis",
  "type": "Activity",
  "number": "12.4",
  "title": "",
  "body": "  Let be a set and a collection of subsets of such that    For each , there is a set in that contains .    If is an element of for some , then there is a set such that .  Let , , , be in . Our goal in this activity is to extend property 2 and show that if , then there is a set such that and .   Since the statement we want to prove depends on a positive integer , we will use mathematical induction. Explain why the and cases are true.   What is the inductive hypothesis and what do we want to prove in the inductive step?   Use the inductive hypothesis and condition 2 to complete the proof of the following lemma.    Let be a set and a collection of subsets of such that   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .     Let , , , be in . If , then there is a set such that and .    "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "sec_base_top.html#proof-17",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be a topological space, and let and satisfy the given conditions. By definition, . For each there is a set such that . Then , and . To complete our proof that is a topology on , we need to demonstrate that is closed under arbitrary unions and finite intersections. We first consider unions. Let be a collection of sets in for in some indexing set . By definition, each is empty or is a union of elements of . So either is empty, or is a union of sets in . Thus, and is closed under arbitrary unions.  Now we show that is closed under finite intersections. Let be a positive integer and let a collection of sets in for . Let . If for any , then is in . So suppose that for each between and . Let . Then for each . For every between and , the fact that is a union of elements in implies that there exists with . Thus, .   shows that there is a set such that and . Since is an arbitrary element of , we must have . But each is subset of , so . It follows that and . Therefore, is a topology on .  "
},
{
  "id": "def_basis_topology",
  "level": "2",
  "url": "sec_base_top.html#def_basis_topology",
  "type": "Definition",
  "number": "12.4",
  "title": "",
  "body": " basis for a topology   Let be a set. A set is a basis for a topology (or just a basis ) on if   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .      "
},
{
  "id": "p-1384",
  "level": "2",
  "url": "sec_base_top.html#p-1384",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis elements basic open sets "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "sec_base_top.html#definition-39",
  "type": "Definition",
  "number": "12.5",
  "title": "",
  "body": " topology generated by a basis   Let be a basis for a topology on a set . The topology generated by contains the empty set and all arbitrary unions of basis elements.   "
},
{
  "id": "activity-56",
  "level": "2",
  "url": "sec_base_top.html#activity-56",
  "type": "Activity",
  "number": "12.5",
  "title": "",
  "body": "  Let and .   Is the set a basis for ? If not, add the smallest number of sets that you can to to make a basis for this topology.   Is the set a basis for ? If not, add the smallest number of sets that you can to to make a basis for this topology.    Let and let have the discrete topology (the topology consisting of all subsets of ). Is a basis for in the the discrete topology? If not, add the smallest number of sets that you can to to make a basis for this topology.    Find a basis for the discrete topology on any set .   "
},
{
  "id": "sec_metric_top_space",
  "level": "1",
  "url": "sec_metric_top_space.html",
  "type": "Section",
  "number": "",
  "title": "Metric Spaces and Topological Spaces",
  "body": " Metric Spaces and Topological Spaces  topology metric  Every metric space is a topological space, where the topology is the collection of open sets defined by the metric. This topology is called the metric topology . A natural question to ask is whether every topological space is a metric space. That is, given a topological space, can we define a metric on the space so that the open sets are exactly the sets in the topology? For example, any space with the discrete topology is a metric space with the discrete metric.    Let and . Explain why there cannot be a metric so that the open sets in the metric topology are the sets in .    Assume that such a metric exists and consider the open balls centered at .     metrizable topological space We conclude that every metric space is a topological space, but not every topological space is a metric space. The topological spaces that can be realized as metric spaces are called metrizable .  "
},
{
  "id": "p-1393",
  "level": "2",
  "url": "sec_metric_top_space.html#p-1393",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric topology "
},
{
  "id": "activity-57",
  "level": "2",
  "url": "sec_metric_top_space.html#activity-57",
  "type": "Activity",
  "number": "12.6",
  "title": "",
  "body": "  Let and . Explain why there cannot be a metric so that the open sets in the metric topology are the sets in .    Assume that such a metric exists and consider the open balls centered at .   "
},
{
  "id": "p-1396",
  "level": "2",
  "url": "sec_metric_top_space.html#p-1396",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metrizable "
},
{
  "id": "sec_neighborhood_top_space",
  "level": "1",
  "url": "sec_neighborhood_top_space.html",
  "type": "Section",
  "number": "",
  "title": "Neighborhoods in Topological Spaces",
  "body": " Neighborhoods in Topological Spaces  Recall that we defined a neighborhood of a point in a metric space to be a subset of the space that contains an open ball centered at . Every open ball is an open set, so we can extend the idea of neighborhood to topological spaces.   neighborhood in a topological space   Let be a topological space, and let . A subset of is a neighborhood of if contains an open set that contains .    Let's look at some examples.    Let and let .    Find all of the neighborhoods of the point .    Find all of the neighborhoods of the point .    In metric spaces, an open set was a neighborhood of each of its points. This is also true in topological spaces.    Let be a topological space. A subset of is open if and only if is a neighborhood of each of its points.    Let be a topological space, and let be a subset of . First we demonstrate that if is open, then is a neighborhood of each of its points. Assume that is an open set, and let . Then contains the open set that contains , so is a neighborhood of .  The reverse containment is the subject of the next activity.      Let be a topological space. Let be a subset of . Assume is a neighborhood of each of its points.    What do we need to do to show that is an open set?    Let . Why must there exist an open set such that ?    Complete the proof that is an open set.    "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "sec_neighborhood_top_space.html#definition-40",
  "type": "Definition",
  "number": "12.6",
  "title": "",
  "body": " neighborhood in a topological space   Let be a topological space, and let . A subset of is a neighborhood of if contains an open set that contains .   "
},
{
  "id": "activity-58",
  "level": "2",
  "url": "sec_neighborhood_top_space.html#activity-58",
  "type": "Activity",
  "number": "12.7",
  "title": "",
  "body": "  Let and let .    Find all of the neighborhoods of the point .    Find all of the neighborhoods of the point .   "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "sec_neighborhood_top_space.html#theorem-33",
  "type": "Theorem",
  "number": "12.7",
  "title": "",
  "body": "  Let be a topological space. A subset of is open if and only if is a neighborhood of each of its points.    Let be a topological space, and let be a subset of . First we demonstrate that if is open, then is a neighborhood of each of its points. Assume that is an open set, and let . Then contains the open set that contains , so is a neighborhood of .  The reverse containment is the subject of the next activity.   "
},
{
  "id": "activity-59",
  "level": "2",
  "url": "sec_neighborhood_top_space.html#activity-59",
  "type": "Activity",
  "number": "12.8",
  "title": "",
  "body": "  Let be a topological space. Let be a subset of . Assume is a neighborhood of each of its points.    What do we need to do to show that is an open set?    Let . Why must there exist an open set such that ?    Complete the proof that is an open set.   "
},
{
  "id": "sec_interior_set_top",
  "level": "1",
  "url": "sec_interior_set_top.html",
  "type": "Section",
  "number": "",
  "title": "The Interior of a Set in a Topological Space",
  "body": " The Interior of a Set in a Topological Space  We have seen that topologies define the open sets in a topological space. As in metric spaces, open sets can be characterized in terms of their interior points. We defined interior points in metric spaces in terms of neighborhoods the same holds true in topological spaces.   interior point   Let be a subset of a topological space . A point is an interior point of if is a neighborhood of .    Remember that a set is a neighborhood of a point if the set contains an open set that contains the point. By definition, every open set is a neighborhood of each of its points, so every point of an open set is an interior point of . Conversely, if every point of a set is an interior point, then is a neighborhood of each of its points and is open. This argument is summarized in the next theorem.    Let be a topological space. A subset of is open if and only if every point of is an interior point of .    The collection of interior points in a set form a subset of that set, called the interior of the set.    The interior of a subset of a topological space is the set .      Consider , where is the standard topology (by standard in this situation, we mean the metric topology determined by the Euclidean metric). Let in . What is ? What is the largest open subset of contained in ?    Consider , where is the discrete topology (the one where all subsets are open). Let in . What is ? What is the largest open subset of contained in ?    Consider , where is the finite complement topology (the one where the open sets are the empty set along with all subsets of such that is finite). Let in . What is ? What is the largest open subset of contained in ?    Let and let . Assume that is a topology on . Let . What is ? What is the largest open subset of contained in ?    One might expect that the interior of a set is an open set, as it was in metric spaces. This is true, but we can say even more. In we saw that in our examples that was the largest open subset of contained in . That this is always true is the subject of the next theorem.    Let be a topological space, and let be a subset of . The interior of is the largest open subset of contained in .    Let be a topological space, and let be a subset of . We need to prove that is an open set in , and that is the largest open subset of contained in . First we demonstrate that is an open set. Let . Then is an interior point of , so is a neighborhood of . This implies that there exists an open set containing so that . But is a neighborhood of each of its points, so every point in is an interior point of . It follows that . Thus, is a neighborhood of each of its points and, consequently, is an open set.  The proof that is the largest open subset of contained in is left for the next activity.      Let be a topological space, and let be a subset of .    What will we have to show to prove that is the largest open subset of contained in ?    Suppose that is an open subset of that is contained in , and let . What does the fact that is open tell us? Then complete the proof that .    One consequence of is the following.    A subset of a topological space is open if and only if .    "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "sec_interior_set_top.html#definition-41",
  "type": "Definition",
  "number": "12.8",
  "title": "",
  "body": " interior point   Let be a subset of a topological space . A point is an interior point of if is a neighborhood of .   "
},
{
  "id": "theorem-34",
  "level": "2",
  "url": "sec_interior_set_top.html#theorem-34",
  "type": "Theorem",
  "number": "12.9",
  "title": "",
  "body": "  Let be a topological space. A subset of is open if and only if every point of is an interior point of .   "
},
{
  "id": "p-1415",
  "level": "2",
  "url": "sec_interior_set_top.html#p-1415",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interior "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "sec_interior_set_top.html#definition-42",
  "type": "Definition",
  "number": "12.10",
  "title": "",
  "body": "  The interior of a subset of a topological space is the set .   "
},
{
  "id": "act_interior",
  "level": "2",
  "url": "sec_interior_set_top.html#act_interior",
  "type": "Activity",
  "number": "12.9",
  "title": "",
  "body": "  Consider , where is the standard topology (by standard in this situation, we mean the metric topology determined by the Euclidean metric). Let in . What is ? What is the largest open subset of contained in ?    Consider , where is the discrete topology (the one where all subsets are open). Let in . What is ? What is the largest open subset of contained in ?    Consider , where is the finite complement topology (the one where the open sets are the empty set along with all subsets of such that is finite). Let in . What is ? What is the largest open subset of contained in ?    Let and let . Assume that is a topology on . Let . What is ? What is the largest open subset of contained in ?   "
},
{
  "id": "thm_Interior",
  "level": "2",
  "url": "sec_interior_set_top.html#thm_Interior",
  "type": "Theorem",
  "number": "12.11",
  "title": "",
  "body": "  Let be a topological space, and let be a subset of . The interior of is the largest open subset of contained in .    Let be a topological space, and let be a subset of . We need to prove that is an open set in , and that is the largest open subset of contained in . First we demonstrate that is an open set. Let . Then is an interior point of , so is a neighborhood of . This implies that there exists an open set containing so that . But is a neighborhood of each of its points, so every point in is an interior point of . It follows that . Thus, is a neighborhood of each of its points and, consequently, is an open set.  The proof that is the largest open subset of contained in is left for the next activity.   "
},
{
  "id": "activity-61",
  "level": "2",
  "url": "sec_interior_set_top.html#activity-61",
  "type": "Activity",
  "number": "12.10",
  "title": "",
  "body": "  Let be a topological space, and let be a subset of .    What will we have to show to prove that is the largest open subset of contained in ?    Suppose that is an open subset of that is contained in , and let . What does the fact that is open tell us? Then complete the proof that .   "
},
{
  "id": "corollary-6",
  "level": "2",
  "url": "sec_interior_set_top.html#corollary-6",
  "type": "Corollary",
  "number": "12.12",
  "title": "",
  "body": "  A subset of a topological space is open if and only if .   "
},
{
  "id": "sec_top_space_summ",
  "level": "1",
  "url": "sec_top_space_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A topology on a set is a collection of open subsets of . More specifically, a set of subsets of a set is a topology on if    and belong to ,    any union of sets in is a set in , and    any finite intersection of sets in is a set in .   A topological space is a set along with a topology on the set.    Any arbitrary union of open sets is open and any finite intersection of open sets is open in a topological space.    It can be difficult to completely describe the open sets in a topology, and it can be difficult to work with arbitrary open sets. If a collection of simpler sets generate a topology, that collection of simpler sets is a basis for the topology. More formally set is a basis for a topology on a set if   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .       A subset of a topological space is a neighborhood of a point if there is an open set contained in such that .    A point in a subset of a topological space is an interior point of if is a neighborhood of . The interior of set is the collection of all interior points of .    A subset of a topological space is open if and only if is equal to its interior.     "
},
{
  "id": "sec_top_space_exer",
  "level": "1",
  "url": "sec_top_space_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  You may wonder why we can't define a basis for a topology on a set to be any collection of subsets whose union is . Consider the example of and .   Determine the collection of all of the unions of elements of .   Explain why the collection of unions of the elements of , along with the empty set, is not a topology on . What property of a basis is not satisfied?    For each integer , let . That is, is the set of all integer multiples of .   Show that is a basis for a topology on .   What set is ?   Is the set of positive integers an open set in the topological space ? Explain.   Is the set of odd integers open in the topological space ? Explain.   Is the set open in the topological space ? Explain.    This exercise is a generalization of . Let and be integers with . Let .   Show that is a basis for a topology on .   If and , and if , what can we say about ?   Let be defined by .   Prove that is a bijection.   If is an open set in , is an open set?   If is an open set in , is an open set?   What is ?    Let .   Show that is a basis for a topology on .   Every basis set is open in . So we can ask it the topology is different than the Euclidean topology generated by all open intervals in . Show that there are intervals of the form that are open in that are not open sets in .    Let , and let and . Both and are topologies in , but every element in is also an element in . Then this happens we say that is a weaker topology than . provides an example. More formally,    Let and be two topologies on a set . If , then is a coarser (or weaker ) topology than . We also say that is a finer (or stronger ) topology than .     What is the weakest topology on any set?   What is the strongest topology on any set?   If a topology on contains all single point sets, then every subset is open and our our topology is the discrete topology. Also, if a topology on contains all two-point sets, then if , , and are in it follows that is in the topology and we again have the.discrete topology. Consider the topology . The only sets not in are and , but adding either set to will produce the discrete topology. So is a strongest topology possible other than the discrete topology.   Let . Are there any topologies on such that is not the discrete topology but there are no stronger topologies on other than the discrete topology? Explain.   Let . Are there any topologies on such that is not the indiscrete topology but there are no weaker topologies on other than the indiscrete topology? Explain.   In general, there may be many different bases for a given topology, and two different bases can have the same cardinality. This is not the case for finite topological space. Let be a finite set and let be a topology on . In this exercise we will show that there is a minimal basis for the topology . That is, there is a basis of such that if is any other basis for , then .   If , let be the intersection of all open sets that contain . Explain why is an open set.   Let . Show that is a basis for .   Show that if is a basis for , then .   Let and let . You may assume that is a topology on . Find the unique minimal basis for .   Below is a list of distinct topologies on . Each topology lies in one or more sequences of topologies ordered by coarseness. For each topology , list the longest sequence(s) of topologies that start , ordered by coarseness.                                                the discrete topology       Find all of the topologies on if    is a single point set    is a two point set    is a three point set.   there are 29 distinct topologies    For each , let . Let . Show that is a topological space.    Let be two subsets in a topological space . What can you say about the relationships between and , respectively? Verify your results.    Let be a nonempty set and let be an element in . Let be the collection of subsets of consisting of , , and all of the subsets of that contain . Show that is a topology on . (This topology is called the particular point topology ). topology particular point    topology excluded point  Let be a nonempty set and let be an element in . Let be the collection of subsets of consisting of , , and all of the subsets of that do not contain . Show that is a topology on . (This topology is called the excluded point topology .)    One application of topology is in digital image displays, such as a computer screen. A digital image display is a rectangular array of pixels and can be modeled using a digital plane. In this exercise we consider a simplification of the digital plane the digital line which we consider as an infinite length one-dimensional collection of pixels. For each we define The sets are illustrated in .   The digital line topology.    In this exercise we explore the collection .  digital line topology  Show that the collection is a basis for a topology on . (The resulting topology is called the digital line topology  . This digital line topology has applications in digital processing see Introduction to Topology: Pure and Applied by Colin Adams and Robert Franzosa , Pearson Education, Inc., 2008, Sections 1.4 and 11.3. The set with the digital line topology is called the digital line . The digital line models a one-dimensional array of pixels, where the even integers are the pixels and the odd integers are boundaries between the pixels. Information about the digital plane can be found in .)   Determine which of the following sets are open in the digital line topology:                       The set of odd integers.    Let be a positive integer and let be the collection of all polynomials in real variables , , , . As a specific example, the polynomial is in . If is in , let be the set of zeros of the polynomial . That is, . Note that is a subset of . For example, if and then is the set of ordered pairs in satisfying , or . This is the graph of the parabola in the plane.   Describe in if .   If is a set of polynomials in , we let be the set of common zeros of all of the polynomials in . Describe if in .  Zariski topology topology Zariski  Let be the set of complements of the sets for . Show that is a basis for a topology on . The resulting topology is called the Zariski topology.   Is the set an open set in with the Zariski topology? Explain.   Explain why the Zariski topology when is just the cofinite topology on . That is, show that every set that is open in the cofinite topology is open in the Zariski topology and that every set that is open in the Zaariski topology is open in the cofinite topology.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   The set is a topology on the set .   The set is an open subset of using the finite complement topology on .   The set is a basis for the topology on the set , where .   Let be a nonempty set. If is the discrete topology, then the topological set is metrizable.   The point is an interior point of the subset in the topological space , where and .   If and are topologies on a space , then is also a topology on .   If and are topologies on a space , then is also a topology on .   "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-126",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " You may wonder why we can't define a basis for a topology on a set to be any collection of subsets whose union is . Consider the example of and .   Determine the collection of all of the unions of elements of .   Explain why the collection of unions of the elements of , along with the empty set, is not a topology on . What property of a basis is not satisfied?  "
},
{
  "id": "ex_aZ_top",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_aZ_top",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " For each integer , let . That is, is the set of all integer multiples of .   Show that is a basis for a topology on .   What set is ?   Is the set of positive integers an open set in the topological space ? Explain.   Is the set of odd integers open in the topological space ? Explain.   Is the set open in the topological space ? Explain.  "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-128",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " This exercise is a generalization of . Let and be integers with . Let .   Show that is a basis for a topology on .   If and , and if , what can we say about ?   Let be defined by .   Prove that is a bijection.   If is an open set in , is an open set?   If is an open set in , is an open set?   What is ?  "
},
{
  "id": "ex_coarse_topology_example",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_coarse_topology_example",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let .   Show that is a basis for a topology on .   Every basis set is open in . So we can ask it the topology is different than the Euclidean topology generated by all open intervals in . Show that there are intervals of the form that are open in that are not open sets in .  "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-130",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let , and let and . Both and are topologies in , but every element in is also an element in . Then this happens we say that is a weaker topology than . provides an example. More formally,    Let and be two topologies on a set . If , then is a coarser (or weaker ) topology than . We also say that is a finer (or stronger ) topology than .     What is the weakest topology on any set?   What is the strongest topology on any set?   If a topology on contains all single point sets, then every subset is open and our our topology is the discrete topology. Also, if a topology on contains all two-point sets, then if , , and are in it follows that is in the topology and we again have the.discrete topology. Consider the topology . The only sets not in are and , but adding either set to will produce the discrete topology. So is a strongest topology possible other than the discrete topology.   Let . Are there any topologies on such that is not the discrete topology but there are no stronger topologies on other than the discrete topology? Explain.   Let . Are there any topologies on such that is not the indiscrete topology but there are no weaker topologies on other than the indiscrete topology? Explain.   In general, there may be many different bases for a given topology, and two different bases can have the same cardinality. This is not the case for finite topological space. Let be a finite set and let be a topology on . In this exercise we will show that there is a minimal basis for the topology . That is, there is a basis of such that if is any other basis for , then .   If , let be the intersection of all open sets that contain . Explain why is an open set.   Let . Show that is a basis for .   Show that if is a basis for , then .   Let and let . You may assume that is a topology on . Find the unique minimal basis for .   Below is a list of distinct topologies on . Each topology lies in one or more sequences of topologies ordered by coarseness. For each topology , list the longest sequence(s) of topologies that start , ordered by coarseness.                                                the discrete topology     "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-131",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Find all of the topologies on if    is a single point set    is a two point set    is a three point set.   there are 29 distinct topologies  "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-132",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " For each , let . Let . Show that is a topological space.  "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-133",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let be two subsets in a topological space . What can you say about the relationships between and , respectively? Verify your results.  "
},
{
  "id": "ex_particular_point_topology",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_particular_point_topology",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a nonempty set and let be an element in . Let be the collection of subsets of consisting of , , and all of the subsets of that contain . Show that is a topology on . (This topology is called the particular point topology ). topology particular point   "
},
{
  "id": "ex_excluded_point_topology",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_excluded_point_topology",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "topology excluded point  Let be a nonempty set and let be an element in . Let be the collection of subsets of consisting of , , and all of the subsets of that do not contain . Show that is a topology on . (This topology is called the excluded point topology .)  "
},
{
  "id": "ex_digital_line_topology",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_digital_line_topology",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " One application of topology is in digital image displays, such as a computer screen. A digital image display is a rectangular array of pixels and can be modeled using a digital plane. In this exercise we consider a simplification of the digital plane the digital line which we consider as an infinite length one-dimensional collection of pixels. For each we define The sets are illustrated in .   The digital line topology.    In this exercise we explore the collection .  digital line topology  Show that the collection is a basis for a topology on . (The resulting topology is called the digital line topology  . This digital line topology has applications in digital processing see Introduction to Topology: Pure and Applied by Colin Adams and Robert Franzosa , Pearson Education, Inc., 2008, Sections 1.4 and 11.3. The set with the digital line topology is called the digital line . The digital line models a one-dimensional array of pixels, where the even integers are the pixels and the odd integers are boundaries between the pixels. Information about the digital plane can be found in .)   Determine which of the following sets are open in the digital line topology:                       The set of odd integers.  "
},
{
  "id": "ex_TS_Zariski",
  "level": "2",
  "url": "sec_top_space_exer.html#ex_TS_Zariski",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let be a positive integer and let be the collection of all polynomials in real variables , , , . As a specific example, the polynomial is in . If is in , let be the set of zeros of the polynomial . That is, . Note that is a subset of . For example, if and then is the set of ordered pairs in satisfying , or . This is the graph of the parabola in the plane.   Describe in if .   If is a set of polynomials in , we let be the set of common zeros of all of the polynomials in . Describe if in .  Zariski topology topology Zariski  Let be the set of complements of the sets for . Show that is a basis for a topology on . The resulting topology is called the Zariski topology.   Is the set an open set in with the Zariski topology? Explain.   Explain why the Zariski topology when is just the cofinite topology on . That is, show that every set that is open in the cofinite topology is open in the Zariski topology and that every set that is open in the Zaariski topology is open in the cofinite topology.  "
},
{
  "id": "exercise-138",
  "level": "2",
  "url": "sec_top_space_exer.html#exercise-138",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   The set is a topology on the set .   The set is an open subset of using the finite complement topology on .   The set is a basis for the topology on the set , where .   Let be a nonempty set. If is the discrete topology, then the topological set is metrizable.   The point is an interior point of the subset in the topological space , where and .   If and are topologies on a space , then is also a topology on .   If and are topologies on a space , then is also a topology on .  "
},
{
  "id": "sec_closed_sets_top_intro",
  "level": "1",
  "url": "sec_closed_sets_top_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We defined a closed set in a metric space to be the complement of an open set. Since a topology is defined in terms of open sets, we can make the same definition of closed set in a topological space. With the definition of closed set in hand, we can then ask if it is possible to define limit points, boundary, and closure in topological spaces and determine if there are corresponding properties for these ideas in topological spaces.   closed set in a topological space   A subset of a topological space is closed if its complement is open.      List all of the closed sets in the indicated topological space.    with and .    with and .    with and .    with and . (What is the name of this topology?)    with and (this topology is called the indiscrete or trivial topology).    Using the examples from part (1), find (if possible), a set that is   both closed and open (if possible, find one that is not the entire set or the empty set)   closed but not open   open but not closed   not open and not closed    In with the Euclidean metric, every single element set is closed. Does this property hold in the topological space , where and ? Explain.    "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "sec_closed_sets_top_intro.html#definition-44",
  "type": "Definition",
  "number": "13.1",
  "title": "",
  "body": " closed set in a topological space   A subset of a topological space is closed if its complement is open.   "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "sec_closed_sets_top_intro.html#exploration-12",
  "type": "Preview Activity",
  "number": "13.1",
  "title": "",
  "body": "  List all of the closed sets in the indicated topological space.    with and .    with and .    with and .    with and . (What is the name of this topology?)    with and (this topology is called the indiscrete or trivial topology).    Using the examples from part (1), find (if possible), a set that is   both closed and open (if possible, find one that is not the entire set or the empty set)   closed but not open   open but not closed   not open and not closed    In with the Euclidean metric, every single element set is closed. Does this property hold in the topological space , where and ? Explain.   "
},
{
  "id": "sec_union_inter_closed",
  "level": "1",
  "url": "sec_union_inter_closed.html",
  "type": "Section",
  "number": "",
  "title": "Unions and Intersections of Closed Sets",
  "body": " Unions and Intersections of Closed Sets  clopen set in a topological space  Now we have defined open and closed sets in topological spaces. In our preview activity we saw that a set can be both open and closed. As we did in metric spaces, we will call any set that is both open and closed a clopen (for closed-open) set.  By definition, any union and any finite intersection of open sets in a topological space is open, so the fact that closed sets are complements of open sets implies the following theorem.    Let be a topological space.   Any intersection of closed sets in is a closed set in .    Any finite union of closed sets in is a closed set in .       Let be a topological space. To prove part 1, assume that is a collection of closed set in for in some indexing set . Then .  The latter is an arbitrary union of open sets and so it an open set. By definition, then, is a closed set.  For part 2, assume that , , , are closed sets in for some . To show that is a closed set, we will show that is an open set. Now is a finite intersection of open sets, and so is an open set. Therefore, is a closed set.     tells us that any intersection of closed sets is closed, but only finite unions of closed sets are closed. How do we know that non-finite unions of closed sets aren't necessarily closed?    Let be a topological space with the finite complement topology . That is, a non-empty set is open in if is finite.    What must be true about the cardinality of the closed sets in ?    Let . Is the set a closed set in ? Explain.    "
},
{
  "id": "p-1541",
  "level": "2",
  "url": "sec_union_inter_closed.html#p-1541",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clopen "
},
{
  "id": "thm_closed_TS",
  "level": "2",
  "url": "sec_union_inter_closed.html#thm_closed_TS",
  "type": "Theorem",
  "number": "13.2",
  "title": "",
  "body": "  Let be a topological space.   Any intersection of closed sets in is a closed set in .    Any finite union of closed sets in is a closed set in .       Let be a topological space. To prove part 1, assume that is a collection of closed set in for in some indexing set . Then .  The latter is an arbitrary union of open sets and so it an open set. By definition, then, is a closed set.  For part 2, assume that , , , are closed sets in for some . To show that is a closed set, we will show that is an open set. Now is a finite intersection of open sets, and so is an open set. Therefore, is a closed set.   "
},
{
  "id": "activity-62",
  "level": "2",
  "url": "sec_union_inter_closed.html#activity-62",
  "type": "Activity",
  "number": "13.2",
  "title": "",
  "body": "  Let be a topological space with the finite complement topology . That is, a non-empty set is open in if is finite.    What must be true about the cardinality of the closed sets in ?    Let . Is the set a closed set in ? Explain.   "
},
{
  "id": "sec_limit_points",
  "level": "1",
  "url": "sec_limit_points.html",
  "type": "Section",
  "number": "",
  "title": "Limit Points and Sequences in Topological Spaces",
  "body": " Limit Points and Sequences in Topological Spaces  Recall that we defined a limit point of a set in a metric space to be a point such that every neighborhood of contains a point in different from . Since we have defined neighborhoods in topological spaces, we can make the same definition.   limit point in a topological space   Let be a topological space, and let be a subset of . A limit point of is a point such that every neighborhood of contains a point in different from .     derived set The set of limit points of is called the derived set of .    Find the limit point(s) of the following sets     in with and      in the set with topology .     where in the discrete topology.     with the topology on with basis , where (This topology is called the digital line topology and has applications in digital processing. That the collection is a basis for a topology on is the topic of )    In metric spaces, a set is closed if and only if it contains all of its limit points. So the corresponding result in topological spaces should be no surprise.    Let be a subset of a topological space , and let be the set of limit points of . Then is closed if and only if .    Let be a topological space, and let be a subset of . First we assume that is closed and show that contains all of its limit points. Let be a limit point of . We proceed by contradiction and assume that . Then , which is an open set. This means that there is a neighborhood (namely ) of that contains no points in , which contradicts the fact that is a limit point of . We conclude that and contains all of its limit points.  For the converse, assume that contains all of its limit points. To show that is closed, we prove that is open. We again proceed by contradiction and assume that is not open. Then there exists such that no neighborhood of is entirely contained in . This implies that every neighborhood of contains a point in and so is a limit point of . It follows that , contradicting the fact that . We conclude that is open and is closed.    In metric spaces we saw that limit point of a set is the limit of a sequence of points in the set. To explore this idea in topological spaces, we define sequences in the same way we did in metric spaces.   sequence in a topological space   A sequence in a topological space is a function to .    We use the same notation and terminology related to sequences as we did in metric spaces: we will write to represent a sequence , where for each . We can't define convergence in a topological space using a metric, but we can use open sets. Recall that a sequence in a metric space converges to a point in the space if, given there exists a positive integer such that for all . In other words, every open ball centered at contains all of the entries of the sequence past a certain point. We can replace open balls with open sets and make a similar definition of convergence in topological spaces.   convergent sequence in a topological space   A sequence in a topological space  converges to the point if, for each open set that contains there exists a positive integer such that for all .     limit of a sequence in a topological space If a sequence converges to a point , we call a limit of the sequence .    In metric spaces, limits of sequences are unique. We may wonder if the same result is true in topological spaces. Consider the topological space , where and . Find all limits of all constant sequences in .   The result of is that sequences do not behave in topological spaces as we would expect them to. Consequently, sequences do not play the same important role in topological spaces as they do in metric spaces. However, the concept of limit point is important, as are the notions of boundary and closure in topological spaces.  "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "sec_limit_points.html#definition-45",
  "type": "Definition",
  "number": "13.3",
  "title": "",
  "body": " limit point in a topological space   Let be a topological space, and let be a subset of . A limit point of is a point such that every neighborhood of contains a point in different from .   "
},
{
  "id": "p-1555",
  "level": "2",
  "url": "sec_limit_points.html#p-1555",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derived set "
},
{
  "id": "activity-63",
  "level": "2",
  "url": "sec_limit_points.html#activity-63",
  "type": "Activity",
  "number": "13.3",
  "title": "",
  "body": "  Find the limit point(s) of the following sets     in with and      in the set with topology .     where in the discrete topology.     with the topology on with basis , where (This topology is called the digital line topology and has applications in digital processing. That the collection is a basis for a topology on is the topic of )   "
},
{
  "id": "thm_TS_closed_limitpoints",
  "level": "2",
  "url": "sec_limit_points.html#thm_TS_closed_limitpoints",
  "type": "Theorem",
  "number": "13.4",
  "title": "",
  "body": "  Let be a subset of a topological space , and let be the set of limit points of . Then is closed if and only if .    Let be a topological space, and let be a subset of . First we assume that is closed and show that contains all of its limit points. Let be a limit point of . We proceed by contradiction and assume that . Then , which is an open set. This means that there is a neighborhood (namely ) of that contains no points in , which contradicts the fact that is a limit point of . We conclude that and contains all of its limit points.  For the converse, assume that contains all of its limit points. To show that is closed, we prove that is open. We again proceed by contradiction and assume that is not open. Then there exists such that no neighborhood of is entirely contained in . This implies that every neighborhood of contains a point in and so is a limit point of . It follows that , contradicting the fact that . We conclude that is open and is closed.   "
},
{
  "id": "definition-46",
  "level": "2",
  "url": "sec_limit_points.html#definition-46",
  "type": "Definition",
  "number": "13.5",
  "title": "",
  "body": " sequence in a topological space   A sequence in a topological space is a function to .   "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "sec_limit_points.html#definition-47",
  "type": "Definition",
  "number": "13.6",
  "title": "",
  "body": " convergent sequence in a topological space   A sequence in a topological space  converges to the point if, for each open set that contains there exists a positive integer such that for all .   "
},
{
  "id": "p-1569",
  "level": "2",
  "url": "sec_limit_points.html#p-1569",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit "
},
{
  "id": "act_TS_limits2",
  "level": "2",
  "url": "sec_limit_points.html#act_TS_limits2",
  "type": "Activity",
  "number": "13.4",
  "title": "",
  "body": " In metric spaces, limits of sequences are unique. We may wonder if the same result is true in topological spaces. Consider the topological space , where and . Find all limits of all constant sequences in .  "
},
{
  "id": "sec_top_closure",
  "level": "1",
  "url": "sec_top_closure.html",
  "type": "Section",
  "number": "",
  "title": "Closure in Topological Spaces",
  "body": " Closure in Topological Spaces  Once we have a definition of limit point, we can define the closure of a set just as we did in metric spaces.   closure in topological spaces   The closure of a subset of a topological space is the set .    In other words, the closure of a set is the collection of the elements of the set and the limit points of the set. The following theorem is the analog of the theorem in metric spaces about closures.    Let be a topological space and a subset of . The closure of a is a closed set. Moreover, the closure of is the smallest closed subset of that contains .    Let be a topological space and a subset of . To prove that is a closed set, we will prove that contains its limit points. Let . To show that , we proceed by contradiction and assume that . This implies that and . Since , there exists a neighborhood of that contains no points of other than . But and , so it follows that . This implies that there is an open set centered at so that . The fact that means that contains a point in different from . Since , we must have . But the fact that is a neighborhood of means that must contain a point of different than , which contradicts the fact that . We conclude that and . This shows that is a closed set.  The proof that is the smallest closed subset of that contains is left for the next activity.      Let be a topological space, and let be a subset of .    What will we have to show to prove that is the smallest closed subset of that contains ?    Suppose that is a closed subset of that contains . To show that , why is it enough to demonstrate that ?    If , what can we say about ?    Complete the proof that .    One consequence of is the following.    A subset of a topological space is closed if and only if .    "
},
{
  "id": "definition-48",
  "level": "2",
  "url": "sec_top_closure.html#definition-48",
  "type": "Definition",
  "number": "13.7",
  "title": "",
  "body": " closure in topological spaces   The closure of a subset of a topological space is the set .   "
},
{
  "id": "thm_TS_closure_closed",
  "level": "2",
  "url": "sec_top_closure.html#thm_TS_closure_closed",
  "type": "Theorem",
  "number": "13.8",
  "title": "",
  "body": "  Let be a topological space and a subset of . The closure of a is a closed set. Moreover, the closure of is the smallest closed subset of that contains .    Let be a topological space and a subset of . To prove that is a closed set, we will prove that contains its limit points. Let . To show that , we proceed by contradiction and assume that . This implies that and . Since , there exists a neighborhood of that contains no points of other than . But and , so it follows that . This implies that there is an open set centered at so that . The fact that means that contains a point in different from . Since , we must have . But the fact that is a neighborhood of means that must contain a point of different than , which contradicts the fact that . We conclude that and . This shows that is a closed set.  The proof that is the smallest closed subset of that contains is left for the next activity.   "
},
{
  "id": "activity-65",
  "level": "2",
  "url": "sec_top_closure.html#activity-65",
  "type": "Activity",
  "number": "13.5",
  "title": "",
  "body": "  Let be a topological space, and let be a subset of .    What will we have to show to prove that is the smallest closed subset of that contains ?    Suppose that is a closed subset of that contains . To show that , why is it enough to demonstrate that ?    If , what can we say about ?    Complete the proof that .   "
},
{
  "id": "corollary-7",
  "level": "2",
  "url": "sec_top_closure.html#corollary-7",
  "type": "Corollary",
  "number": "13.9",
  "title": "",
  "body": "  A subset of a topological space is closed if and only if .   "
},
{
  "id": "sec_set_boundary",
  "level": "1",
  "url": "sec_set_boundary.html",
  "type": "Section",
  "number": "",
  "title": "The Boundary of a Set",
  "body": " The Boundary of a Set  In addition to limit points, we also defined boundary points in metric spaces. Recall that a boundary point of a set in a metric space could be considered to be any point in . We make the same definition in a topological space.   boundary point in a topological space  boundary in a topological space   Let be a topological space, and let be a subset of . A boundary point of is a point such that every neighborhood of contains a point in and a point in . The boundary of is the set .    As with metric spaces, the boundary points of a set are those points that are between  and its complement.    Find the boundaries of the following sets     in with and .     in the set with topology .     where in the discrete topology.     in with the finite complement topology .    Just as with metric spaces, we can characterize the closed sets as the sets that contain their boundary.    A subset of a topological space is closed if and only if contains its boundary.    The proof of is left to .  "
},
{
  "id": "definition-49",
  "level": "2",
  "url": "sec_set_boundary.html#definition-49",
  "type": "Definition",
  "number": "13.10",
  "title": "",
  "body": " boundary point in a topological space  boundary in a topological space   Let be a topological space, and let be a subset of . A boundary point of is a point such that every neighborhood of contains a point in and a point in . The boundary of is the set .   "
},
{
  "id": "act_TS_bl_examples",
  "level": "2",
  "url": "sec_set_boundary.html#act_TS_bl_examples",
  "type": "Activity",
  "number": "13.6",
  "title": "",
  "body": "  Find the boundaries of the following sets     in with and .     in the set with topology .     where in the discrete topology.     in with the finite complement topology .   "
},
{
  "id": "thm_TS_Closed_boundary",
  "level": "2",
  "url": "sec_set_boundary.html#thm_TS_Closed_boundary",
  "type": "Theorem",
  "number": "13.11",
  "title": "",
  "body": "  A subset of a topological space is closed if and only if contains its boundary.   "
},
{
  "id": "sec_separation_ax",
  "level": "1",
  "url": "sec_separation_ax.html",
  "type": "Section",
  "number": "",
  "title": "Separation Axioms",
  "body": " Separation Axioms  As we have seen, sequences in topological spaces do not generally behave as we would expect them to. As a result, we look for conditions on topological spaces under which sequences do exhibit some regular behavior. In our preview activity we saw that it is possible in a topological space that single point sets do not have to be closed. In , we also saw that limits of sequences in topological spaces are not necessarily unique. This type of behavior limits the results that one can prove about such spaces. As a result, we define classes of topological spaces whose behaviors are closer to what our intuition suggests.    Consider a metric space , and let and be distinct points in .   Explain why and cannot both be limits of the same sequence if we can find disjoint open balls centered at and centered at such that .   Now show that we can find disjoint open balls centered at and centered at such that .    Return to our example from with and topology . We saw that every point in is a limit of the constant sequence . If in , Explain why there are no disjoint open sets containing and containing .    It is the fact as described in that we can separate disjoint points by disjoint open sets that separates metric spaces from other spaces where limits are not unique. If we restrict ourselves to spaces where we can separate points like this, then we might expect to have unique limits. Such spaces are called Hausdorff spaces.   Hausdoff space   A topological space is a Hausdorff space if for each pair , of distinct points in , there exists open sets of and of such that .     shows that every metric space is a Hausdorff space. Once we start imposing conditions on topological spaces, we restrict the number of spaces we consider.    Let be any set and the discrete topology. Is Hausdorff? Justify your answer.    Let be a Hausdorff topological space with a finite set. Is an open set? Explain. What does this say about the topology ?   Is a limit point of ?      There are examples of Hausdorff spaces that are not the standard metric spaces. For example, Let . We use to make a topology on with basis all open intervals of the form and all sets of the form , where are real numbers. This topology adds the extra intervals of the form to the standard open intervals to make a new topology. This topology is known as the -topology on . Just as in , if and are distinct real numbers we can separate and with open intervals.    The reason we defined Hausdorff spaces is because they have familiar properties, as the next theorems illustrate.    Each single point subset of a Hausdorff topological space is closed.    Let be a Hausdorff topological space, and let for some . To show that is closed, we prove that is open. Let . Then . So there exist open sets containing and containing such that . So and . Thus, every point of is an interior point and is an open set. This verifies that is a closed set.      A sequence of points in a Hausdorff topological space can have at most one limit in the space.    Let be a Hausdorff topological space, and let be a sequence in . Suppose converges to and to . Suppose . Then there exist open sets of and of such that . But the fact that converges to implies that there is a positive integer such that for all . But then for any . This contradicts the fact that converges to . We conclude that and that the sequence can have at most one limit in .    Hausdorff spaces are important because we can separate distinct points with disjoint open sets. It is also of interest to consider what other types of objects we can separate with disjoint open sets. For example, the indiscrete topology is quite bad in the sense that its open sets can't distinguish between distinct points. That is, if and are distinct points in a space with the indiscrete topology, then every open set that contains also contains . By contrast, in a Hausdorff space we can separate distinct points with disjoint open sets. This is an example of what is called a separation property. Other types of separation properties describe different types of topological spaces. These separation properties determine what kind of objects we can separate with disjoint open sets e.g., points, points and closed sets, closed sets and closed sets. The following are the most widely used separation properties. These properties rule out kinds of unwelcome properties that a topological space might have. For example, recall that limits of sequences are unique in Hausdorff spaces. (We traditionally call these separation properties axioms because we generally assume that our topological spaces have these properties. However, these are not axioms in the usual sense of the word, but rather properties.)   -space  Frechet space  -space  -space  normal topological space  -space   Let be a topological space.   The space is a T -space or Frechet space if for every in , there exist an open set containing such that .    The space is a T -space or a Hausdorff space if for every in , there exist disjoint open sets and such that and .    The space is regular regular topological space if for each closed set of and each point , there exists disjoint open sets and in such that and . The space is a T -space or a regular Hausdorff space if is a regular space.    The space is a normal space if for each pair and of disjoint closed subsets of there exist disjoint open sets and such that and . The space is a T -space or a normal Hausdorff space if is a normal space.        shows that every metric space is both regular and normal. The use of the variable comes from the German Trennungsaxiome for separation axioms. Note again that these are not technically axioms, but rather properties. An interesting question is why we insist that and -spaces also be . We want these axioms to provide more separation as the index increases. Consider a space with the indiscrete topology. In this space, nothing is separated. However, this space is vacuously regular and normal. To avoid this seeming incongruity, we insist on working only with spaces. Note that a space with the indiscrete topology is not .  It is the case that every -space is , every -space is , and every -space is . Verification of these statements are left to . These properties are also all different. That is, there are -spaces that are not and -spaces that are not . These problems are given in . The fact that there are -spaces that are not is a bit difficult. An example is the Niemytzki plane . The Niemytzki plane is the upper half plane . Let be the boundary of . That is, . A basis for the topology on consists of the standard open disks centered at points with along with the open disks in that are tangent to together with their points of tangency. We won't verify that the Niemytzki plane is but not . The interested reader can find an accessible proof in the article Another Proof that the Niemytzki Plane is not Normal by David H. Vetterlein in the Pi Mu Epsilon Journal , Vol. 10, No. 2 (SPRING 1995), pp. 119-121.  "
},
{
  "id": "act_Hausdorff",
  "level": "2",
  "url": "sec_separation_ax.html#act_Hausdorff",
  "type": "Activity",
  "number": "13.7",
  "title": "",
  "body": "  Consider a metric space , and let and be distinct points in .   Explain why and cannot both be limits of the same sequence if we can find disjoint open balls centered at and centered at such that .   Now show that we can find disjoint open balls centered at and centered at such that .    Return to our example from with and topology . We saw that every point in is a limit of the constant sequence . If in , Explain why there are no disjoint open sets containing and containing .   "
},
{
  "id": "p-1601",
  "level": "2",
  "url": "sec_separation_ax.html#p-1601",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hausdorff "
},
{
  "id": "definition-50",
  "level": "2",
  "url": "sec_separation_ax.html#definition-50",
  "type": "Definition",
  "number": "13.12",
  "title": "",
  "body": " Hausdoff space   A topological space is a Hausdorff space if for each pair , of distinct points in , there exists open sets of and of such that .   "
},
{
  "id": "activity-68",
  "level": "2",
  "url": "sec_separation_ax.html#activity-68",
  "type": "Activity",
  "number": "13.8",
  "title": "",
  "body": "  Let be any set and the discrete topology. Is Hausdorff? Justify your answer.    Let be a Hausdorff topological space with a finite set. Is an open set? Explain. What does this say about the topology ?   Is a limit point of ?   "
},
{
  "id": "exp_K_topology",
  "level": "2",
  "url": "sec_separation_ax.html#exp_K_topology",
  "type": "Example",
  "number": "13.13",
  "title": "",
  "body": "  There are examples of Hausdorff spaces that are not the standard metric spaces. For example, Let . We use to make a topology on with basis all open intervals of the form and all sets of the form , where are real numbers. This topology adds the extra intervals of the form to the standard open intervals to make a new topology. This topology is known as the -topology on . Just as in , if and are distinct real numbers we can separate and with open intervals.   "
},
{
  "id": "theorem-40",
  "level": "2",
  "url": "sec_separation_ax.html#theorem-40",
  "type": "Theorem",
  "number": "13.14",
  "title": "",
  "body": "  Each single point subset of a Hausdorff topological space is closed.    Let be a Hausdorff topological space, and let for some . To show that is closed, we prove that is open. Let . Then . So there exist open sets containing and containing such that . So and . Thus, every point of is an interior point and is an open set. This verifies that is a closed set.   "
},
{
  "id": "theorem-41",
  "level": "2",
  "url": "sec_separation_ax.html#theorem-41",
  "type": "Theorem",
  "number": "13.15",
  "title": "",
  "body": "  A sequence of points in a Hausdorff topological space can have at most one limit in the space.    Let be a Hausdorff topological space, and let be a sequence in . Suppose converges to and to . Suppose . Then there exist open sets of and of such that . But the fact that converges to implies that there is a positive integer such that for all . But then for any . This contradicts the fact that converges to . We conclude that and that the sequence can have at most one limit in .   "
},
{
  "id": "definition-51",
  "level": "2",
  "url": "sec_separation_ax.html#definition-51",
  "type": "Definition",
  "number": "13.16",
  "title": "",
  "body": " -space  Frechet space  -space  -space  normal topological space  -space   Let be a topological space.   The space is a T -space or Frechet space if for every in , there exist an open set containing such that .    The space is a T -space or a Hausdorff space if for every in , there exist disjoint open sets and such that and .    The space is regular regular topological space if for each closed set of and each point , there exists disjoint open sets and in such that and . The space is a T -space or a regular Hausdorff space if is a regular space.    The space is a normal space if for each pair and of disjoint closed subsets of there exist disjoint open sets and such that and . The space is a T -space or a normal Hausdorff space if is a normal space.      "
},
{
  "id": "p-1620",
  "level": "2",
  "url": "sec_separation_ax.html#p-1620",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Niemytzki plane "
},
{
  "id": "sec_closed_sets_top_summ",
  "level": "1",
  "url": "sec_closed_sets_top_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A subset of a topological space is closed if is open.    Any intersection of closed sets is closed, while unions of finitely many closed sets are closed.    A sequence in a topological space is a function to .    A sequence in a topological space converges to a point in if for each open set containing , there exists a positive integer such that for all .    If a sequence in a topological space converges to a point , then is a limit of the sequence .    A limit point of a subset of a topological space is a point such that every neighborhood of contains a point in different from . A subset of a topological space is closed if and only if contains all of its limit points.    A boundary point of a subset of a topological space is a point such that every neighborhood of contains a point in and a point in . The boundary of is the set . A subset of is closed if and only if contains its boundary.    A topological space is Hausdorff if we can separate distinct points with open sets in the space. That is, if for each pair , of distinct points in , there exists open sets of and of such that . Hausdorff spaces are important because sequences have unique limits in Hausdorff spaces and single point sets are closed.    Separation axioms tell us what kinds of objects can be separated by open sets.   In a -space, we can separate two distinct points with one open set. That is, given distinct points and in a topological space , there is an open set that separates from in the sense that but .    In a -space we can separate points more distinctly. That is, if and are different points in , there exist disjoint open sets and such that and .    In a -space we can separate a point from a closed set that does not contain that point. That is, if is a closed subset of and is a point not in , there exists disjoint open sets and in such that and .    In a -space we can separate disjoint closed sets. That is, if and are disjoint closed subsets of , there exist disjoint open sets and such that and .        "
},
{
  "id": "sec_closed_sets_top_exer",
  "level": "1",
  "url": "sec_closed_sets_top_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Determine exactly which finite topological spaces are Hausdorff. Prove your result.    Let be a topological space and let be a subset of . Prove that .    Let a subset of a topological space. Prove that if and only if is open and closed.    Let be a nonempty set with at least two elements and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Let be a subset of . Find, with proof, , , and when    has the topology with     has the topology with .   topology lower limit Sorgenfrey line  Let .   Show that is a basis for a topology on . This topology is called the lower limit topology on . The line with the topology is sometimes called the Sorgenfrey line (after the mathematician Robert Sorgenfrey).   Show that every open interval is also an open set in the lower limit topology.   If and are topologies on a set such that , then is said to be a coarser topology that , or is a finer topology that . Part (b) shows that the lower limit topology may be a finer topology than the Euclidean metric topology. Determine if this is true, that the lower limit topology is actually a finer topology than the Euclidean metric topology on . Justify your answer.   Let be in . Is the set clopen in ? Prove your answer.    A subset of a topological space is said to be dense in if .   Show that is dense in using the Euclidean metric topology.   Is dense in using the Euclidean metric topology? Prove your answer.   Let be a subset of a topological space . Prove that is dense in if and only if for every open set .    Let be a topological space and let be a subset of .   Show that the sets , , and are mutually disjoint (that is, the intersection of any two of these sets is empty).   Prove that .    Prove that a subspace of a Hausdorff space is a Hausdorff space.    Let be a nonempty set with at least two elements and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, if is a Hausdorff space when    has the topology     has the topology .    Prove that a subset of a topological space is closed if and only if contains its boundary.    Recall that a point in a subset of a metric space is an isolated point of if there is a neighborhood of in such that . We can make the same definition in any topological space.    A point in a subset of a topological space is an isolated point of  isolated point if there is a neighborhood of such that .     If is a subset of a topological space , prove that a point is an isolated point of if and only if is an open set in .   We proved that in a metric space every boundary point of a set is either a limit point or an isolated point of . (See .) Is the same statement true in a topological space? Prove your answer.    For each integer , let . That is, is the set of all integer multiples of . That is a basis for a topology on is the topic of Exercise (ex_aZ_top). In this exercise work in the topological space    Let , the set of even integers.   Find, with justification, .   Find, with justification, .   Let . That is, is the set of natural numbers.   Find, with justification, .   Find, with justification, .    Consider the Double Origin topology topology Double Origin defined as follows. Let , where is considered as a point that is not in ( is our double origin). As a basis for the open sets, we use the standard open balls for every point except and . For the point , we define open sets to be and for we define open sets to be . So is the top half of a disk of radius centered at the origin, excluding the -axis but including the origin, and is the bottom half of a disk of radius centered at the origin, excluding the -axis and including the point .   Show that the collection of sets described as a basis for the Double Origin topology is actually a basis for a topology.   Is with the Double Origin topology Hausdorff? Prove your answer.    Show that finite sets are closed in with the Zariski topology.   Show that with the Zariski topology is not Hausdorff. ( shows that a basis for the Zariski topology on is the collection of sets of the form , where is the set of zeros of the polynomial in variables.)    Consider the digital line topology on with basis , where    Let of .   Find the limit points and boundary points of . Prove your conjectures. Is every limit point of a boundary point of ? Is every boundary point of a limit point of ?   Find and write as a union of open sets.   Now consider the subset of .   Find the limit points and boundary points of . Prove your conjectures. Is every limit point of a boundary point of ? Is every boundary point of a limit point of ?   Find and write as a union of open sets.    Let be a metric space. Recall from in , that if is a closed subset of a metric space and is an element of , then if and only if . Use this idea to do the following.   Prove that every metric space is regular.   Prove that every metric space is a normal space.    Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . That generates a topology on follows from the fact that is finer than the Euclidean topology.   Show that is a Hausdorff space.    shows that every metric space is regular. In this part of the exercise, show that is not a regular space. We can conclude that is not metrizable.   Consider and .    Prove that a topological space is if and only if each singleton set is closed.   Show that every -space is , that every -space is , and that every -space is .    In this exercise we illustrate spaces that are but not and but not .   Show that with the finite complement topology is but not .   Define the space as in to be the set of reals with topology with a basis that consists of the standard open intervals in along with all sets of the form , where is any open interval and . Show that is but not .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Every limit point of a subset of a topological space is also a boundary point of .   Every boundary point of a subset of a topological space is also a limit point of .   If is a topological space and such that , then is both open and closed.   If is a topological space and and are subsets of with and , then .   If and are subsets of a topological space , then .   If and are subsets of a topological space , then .   "
},
{
  "id": "exercise-139",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-139",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine exactly which finite topological spaces are Hausdorff. Prove your result.  "
},
{
  "id": "exercise-140",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-140",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a topological space and let be a subset of . Prove that .  "
},
{
  "id": "exercise-141",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-141",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let a subset of a topological space. Prove that if and only if is open and closed.  "
},
{
  "id": "exercise-142",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-142",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be a nonempty set with at least two elements and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Let be a subset of . Find, with proof, , , and when    has the topology with     has the topology with .  "
},
{
  "id": "ex_Closed_Sets_Sorgenfrey",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_Closed_Sets_Sorgenfrey",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "topology lower limit Sorgenfrey line  Let .   Show that is a basis for a topology on . This topology is called the lower limit topology on . The line with the topology is sometimes called the Sorgenfrey line (after the mathematician Robert Sorgenfrey).   Show that every open interval is also an open set in the lower limit topology.   If and are topologies on a set such that , then is said to be a coarser topology that , or is a finer topology that . Part (b) shows that the lower limit topology may be a finer topology than the Euclidean metric topology. Determine if this is true, that the lower limit topology is actually a finer topology than the Euclidean metric topology on . Justify your answer.   Let be in . Is the set clopen in ? Prove your answer.  "
},
{
  "id": "exercise-144",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-144",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " A subset of a topological space is said to be dense in if .   Show that is dense in using the Euclidean metric topology.   Is dense in using the Euclidean metric topology? Prove your answer.   Let be a subset of a topological space . Prove that is dense in if and only if for every open set .  "
},
{
  "id": "exercise-145",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-145",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be a topological space and let be a subset of .   Show that the sets , , and are mutually disjoint (that is, the intersection of any two of these sets is empty).   Prove that .  "
},
{
  "id": "ex_Closed_sets_Hausdorff_subspace",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_Closed_sets_Hausdorff_subspace",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Prove that a subspace of a Hausdorff space is a Hausdorff space.  "
},
{
  "id": "exercise-147",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-147",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a nonempty set with at least two elements and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, if is a Hausdorff space when    has the topology     has the topology .  "
},
{
  "id": "ex_TS_Closed_boundary",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_TS_Closed_boundary",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Prove that a subset of a topological space is closed if and only if contains its boundary.  "
},
{
  "id": "exercise-149",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-149",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Recall that a point in a subset of a metric space is an isolated point of if there is a neighborhood of in such that . We can make the same definition in any topological space.    A point in a subset of a topological space is an isolated point of  isolated point if there is a neighborhood of such that .     If is a subset of a topological space , prove that a point is an isolated point of if and only if is an open set in .   We proved that in a metric space every boundary point of a set is either a limit point or an isolated point of . (See .) Is the same statement true in a topological space? Prove your answer.  "
},
{
  "id": "exercise-150",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-150",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " For each integer , let . That is, is the set of all integer multiples of . That is a basis for a topology on is the topic of Exercise (ex_aZ_top). In this exercise work in the topological space    Let , the set of even integers.   Find, with justification, .   Find, with justification, .   Let . That is, is the set of natural numbers.   Find, with justification, .   Find, with justification, .  "
},
{
  "id": "exercise-151",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-151",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Consider the Double Origin topology topology Double Origin defined as follows. Let , where is considered as a point that is not in ( is our double origin). As a basis for the open sets, we use the standard open balls for every point except and . For the point , we define open sets to be and for we define open sets to be . So is the top half of a disk of radius centered at the origin, excluding the -axis but including the origin, and is the bottom half of a disk of radius centered at the origin, excluding the -axis and including the point .   Show that the collection of sets described as a basis for the Double Origin topology is actually a basis for a topology.   Is with the Double Origin topology Hausdorff? Prove your answer.  "
},
{
  "id": "exercise-152",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-152",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Show that finite sets are closed in with the Zariski topology.   Show that with the Zariski topology is not Hausdorff. ( shows that a basis for the Zariski topology on is the collection of sets of the form , where is the set of zeros of the polynomial in variables.)  "
},
{
  "id": "exercise-153",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-153",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Consider the digital line topology on with basis , where    Let of .   Find the limit points and boundary points of . Prove your conjectures. Is every limit point of a boundary point of ? Is every boundary point of a limit point of ?   Find and write as a union of open sets.   Now consider the subset of .   Find the limit points and boundary points of . Prove your conjectures. Is every limit point of a boundary point of ? Is every boundary point of a limit point of ?   Find and write as a union of open sets.  "
},
{
  "id": "ex_Metric_space_regular",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_Metric_space_regular",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Let be a metric space. Recall from in , that if is a closed subset of a metric space and is an element of , then if and only if . Use this idea to do the following.   Prove that every metric space is regular.   Prove that every metric space is a normal space.  "
},
{
  "id": "exercise-155",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-155",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . That generates a topology on follows from the fact that is finer than the Euclidean topology.   Show that is a Hausdorff space.    shows that every metric space is regular. In this part of the exercise, show that is not a regular space. We can conclude that is not metrizable.   Consider and .  "
},
{
  "id": "ex_T_1_2_3",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_T_1_2_3",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Prove that a topological space is if and only if each singleton set is closed.   Show that every -space is , that every -space is , and that every -space is .  "
},
{
  "id": "ex_not_T_1_2_3",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#ex_not_T_1_2_3",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": " In this exercise we illustrate spaces that are but not and but not .   Show that with the finite complement topology is but not .   Define the space as in to be the set of reals with topology with a basis that consists of the standard open intervals in along with all sets of the form , where is any open interval and . Show that is but not .  "
},
{
  "id": "exercise-158",
  "level": "2",
  "url": "sec_closed_sets_top_exer.html#exercise-158",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Every limit point of a subset of a topological space is also a boundary point of .   Every boundary point of a subset of a topological space is also a limit point of .   If is a topological space and such that , then is both open and closed.   If is a topological space and and are subsets of with and , then .   If and are subsets of a topological space , then .   If and are subsets of a topological space , then .  "
},
{
  "id": "sec_cont_top_intro",
  "level": "1",
  "url": "sec_cont_top_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Recall that we could characterize a function from a metric space to a metric space as continuous at if is a neighborhood of in whenever is a neighborhood of in . We have defined neighborhoods in topological spaces, so we can use this characterization as our definition of a continuous function from one topological space to another.   continuity in a topological space   A function from a topological space to a topological space is continuous at a point  if is a neighborhood of in whenever is a neighborhood of in . The function is continuous if is continuous at each point in .    We saw that in metric spaces, a useful characterization of continuity was in terms of open sets. It is not surprising that we have the same characterization in topological spaces. You may assume the result of (the topological space version of for metric spaces) for this activity.    Let be a function from a topological space to a topological space . Then is continuous if and only if is an open set in whenever is an open set in .      Let and let . Define by .   Is continuous at ?   Is a continuous function?    Let and let . Define by , , .   Show that is a continuous function.   Even though is continuous, it is possible that may not be open for every open set in . Find such an example for this function .    Functions that have the property that is open whenever is open in are called open functions.   function open  open function   Let be a function from a topological space to a topological space . Then is an open function if is open in whenever is open in .    There is a similar definition of a closed function.    Let and . Define by . At which points is continuous? Is a continuous function?    Let where and is the finite complement topology. Is a continuous function? If is not continuous, exhibit a specific point at which fails to be continuous. Explain.    Let where and is the finite complement topology. Is a continuous function? If is not continuous, exhibit a specific point at which fails to be continuous. Explain.    It can sometimes be easier to show that a function mapping a topological space to a topological space is continuous by working with a basis instead of all open sets. Let be a basis for the topology on . Is it the case that if is open for every , then is continuous? Verify your result.    To complete the introduction to this section, we prove . We prove one direction now and leave the other for the next activity.  Let be a function from a topological space to a topological space . We first assume that is continuous and show that is an open set in whenever is an open set in . Suppose that is an open set in . To show that is open in , we will show that is a neighborhood of each of its points. Let . Then . Since is an open set, is a neighborhood of . The fact that is continuous means that is a neighborhood of . So is a neighborhood of each of its points and is an open set.    Now we prove the remaining implication in . That is, let be a function from a topological space to a topological space , and assume that is open whenever is open in . We will prove that is a continuous function.    Using the definition, what does it take to show that is a continuous function?    Let and suppose that is a neighborhood of in . What can we conclude from being a neighborhood?    Use the assumption about in this activity to explain why is a neighborhood of in .    Explain how we have shown that is a continuous function.    The following theorem is the topological analog of . The proof is left for .    Let be a function from a topological space to a topologicval space . Then is continuous if and only if is closed in whenever is a closed set in .    "
},
{
  "id": "def_Continuity_topology",
  "level": "2",
  "url": "sec_cont_top_intro.html#def_Continuity_topology",
  "type": "Definition",
  "number": "14.1",
  "title": "",
  "body": " continuity in a topological space   A function from a topological space to a topological space is continuous at a point  if is a neighborhood of in whenever is a neighborhood of in . The function is continuous if is continuous at each point in .   "
},
{
  "id": "thm_PA_TS_Open_continuity",
  "level": "2",
  "url": "sec_cont_top_intro.html#thm_PA_TS_Open_continuity",
  "type": "Theorem",
  "number": "14.2",
  "title": "",
  "body": "  Let be a function from a topological space to a topological space . Then is continuous if and only if is an open set in whenever is an open set in .   "
},
{
  "id": "exploration-13",
  "level": "2",
  "url": "sec_cont_top_intro.html#exploration-13",
  "type": "Preview Activity",
  "number": "14.1",
  "title": "",
  "body": "  Let and let . Define by .   Is continuous at ?   Is a continuous function?    Let and let . Define by , , .   Show that is a continuous function.   Even though is continuous, it is possible that may not be open for every open set in . Find such an example for this function .    Functions that have the property that is open whenever is open in are called open functions.   function open  open function   Let be a function from a topological space to a topological space . Then is an open function if is open in whenever is open in .    There is a similar definition of a closed function.    Let and . Define by . At which points is continuous? Is a continuous function?    Let where and is the finite complement topology. Is a continuous function? If is not continuous, exhibit a specific point at which fails to be continuous. Explain.    Let where and is the finite complement topology. Is a continuous function? If is not continuous, exhibit a specific point at which fails to be continuous. Explain.    It can sometimes be easier to show that a function mapping a topological space to a topological space is continuous by working with a basis instead of all open sets. Let be a basis for the topology on . Is it the case that if is open for every , then is continuous? Verify your result.   "
},
{
  "id": "activity-69",
  "level": "2",
  "url": "sec_cont_top_intro.html#activity-69",
  "type": "Activity",
  "number": "14.2",
  "title": "",
  "body": "  Now we prove the remaining implication in . That is, let be a function from a topological space to a topological space , and assume that is open whenever is open in . We will prove that is a continuous function.    Using the definition, what does it take to show that is a continuous function?    Let and suppose that is a neighborhood of in . What can we conclude from being a neighborhood?    Use the assumption about in this activity to explain why is a neighborhood of in .    Explain how we have shown that is a continuous function.   "
},
{
  "id": "thm_closed_sets_continuity_TS",
  "level": "2",
  "url": "sec_cont_top_intro.html#thm_closed_sets_continuity_TS",
  "type": "Theorem",
  "number": "14.4",
  "title": "",
  "body": "  Let be a function from a topological space to a topologicval space . Then is continuous if and only if is closed in whenever is a closed set in .   "
},
{
  "id": "sec_metric_equiv",
  "level": "1",
  "url": "sec_metric_equiv.html",
  "type": "Section",
  "number": "",
  "title": "Metric Equivalence",
  "body": " Metric Equivalence  We have seen that we can make a set into a metric space with different metrics. For example, the spaces , , , and are all metric spaces, where is the Euclidean metric, the taxicab metric, the max metric, and the discrete metric. But are these metric spaces really different metric spaces? What do we mean by different ?    We might consider two metric spaces and to be equivalent if we can find a bijection between the two sets and that preserves the metric properties. That is, find a bijective function such that for all . In other words, preserves distances.    Let and , with both and the Euclidean metric. Is it possible to find a bijection that preserves the metric properties? Explain.    Now let and , where is defined by and . You may assume that is a metric. Is it possible to find a bijection that preserves the metric properties? Explain.    If there is a bijection between metric spaces that preserves distances, we say that the metric spaces are metrically equivalent .   metrically equivalent   Two metric spaces and are metrically equivalent if there is a bijection such that for all .    Because is a bijection, it will also be the case in that for all and in . The proof is left for .  Any function that preserves distances (like the one in ) is called an isometry .   isometry   A function from a metric space to a metric space is an isometry if is a bijection and for all .    Metric equivalence is a very strong type of equivalence the existence of an isometry does not allow for much flexibility since distances must be preserved. From a topological perspective, we are only concerned about the open sets there are no distances. The open unit ball in and the open ball in (where is the Euclidean metric and is the max metric) are not that different as we can see in . If we don't worry about preserving distances, we can stretch the open ball in along the lines and uniformly in a way to mold it onto the unit ball in . The important thing is that this stretching will preserve the open sets. This is a much more forgiving type of equivalence and maintains the central idea of topology that we have discussed what properties of a space are not altered by stretching and bending the space. This type of equivalence that allows us to manipulate a space without fundamentally changing the open sets is called topological equivalence .   The open unit balls in and .    "
},
{
  "id": "activity-70",
  "level": "2",
  "url": "sec_metric_equiv.html#activity-70",
  "type": "Activity",
  "number": "14.3",
  "title": "",
  "body": "  We might consider two metric spaces and to be equivalent if we can find a bijection between the two sets and that preserves the metric properties. That is, find a bijective function such that for all . In other words, preserves distances.    Let and , with both and the Euclidean metric. Is it possible to find a bijection that preserves the metric properties? Explain.    Now let and , where is defined by and . You may assume that is a metric. Is it possible to find a bijection that preserves the metric properties? Explain.   "
},
{
  "id": "p-1738",
  "level": "2",
  "url": "sec_metric_equiv.html#p-1738",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metrically equivalent "
},
{
  "id": "def_MS_metric_equivalence",
  "level": "2",
  "url": "sec_metric_equiv.html#def_MS_metric_equivalence",
  "type": "Definition",
  "number": "14.5",
  "title": "",
  "body": " metrically equivalent   Two metric spaces and are metrically equivalent if there is a bijection such that for all .   "
},
{
  "id": "p-1741",
  "level": "2",
  "url": "sec_metric_equiv.html#p-1741",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isometry "
},
{
  "id": "definition-56",
  "level": "2",
  "url": "sec_metric_equiv.html#definition-56",
  "type": "Definition",
  "number": "14.6",
  "title": "",
  "body": " isometry   A function from a metric space to a metric space is an isometry if is a bijection and for all .   "
},
{
  "id": "p-1743",
  "level": "2",
  "url": "sec_metric_equiv.html#p-1743",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topological equivalence "
},
{
  "id": "F_Equivalence",
  "level": "2",
  "url": "sec_metric_equiv.html#F_Equivalence",
  "type": "Figure",
  "number": "14.7",
  "title": "",
  "body": " The open unit balls in and .   "
},
{
  "id": "sec_top_equiv",
  "level": "1",
  "url": "sec_top_equiv.html",
  "type": "Section",
  "number": "",
  "title": "Topological Equivalence",
  "body": " Topological Equivalence  When we can deform one set into another without poking holes in the set, we consider the two sets to be equivalent from a topological perspective. Such a deformation has to be a bijection to ensure that the two sets contain the same number of elements, continuous so that the inverse images of open sets are open, and must be continuous so images of open sets are open. Such a function provides a one-to-one correspondence between open sets in the two spaces. This leads to the next definition.   topologically equivalent   Two topological spaces and are topologically equivalent if there is a continuous bijection such that is also continuous.    Metric equivalence always implies topological equivalence (using the metric topologies), which is left for . So metric equivalence is a stronger condition than topological equivalence.  The function (or ) in is called a homeomorphism .   homeomorphism   Let and be topological spaces. A function is a homeomorphism if is a continuous bijection such that is also continuous.     homeomorphic spaces If there is a homeomorphism from to we say that the spaces to are homeomorphic topological spaces.  It can be difficult to show directly that two metric spaces are homeomorphic, but there are ways to make the process easier in metric spaces. If is a homeomorphism from the metric space to the metric space , the continuity of ensures a smooth deformation from to . In terms of the metrics, this means that distances cannot get distorted too much in fact, the amount distances are distorted should be bounded. In other words, we might expect that there is a constant so that for any . The next theorem tells us that this is a sufficient condition for topological equivalence when we work in the same underlying space.    Let be a set on which two metrics and are defined. If there exist positive constants and so that for all , then is topologically equivalent to .    Let be a set on which two metrics and are defined. Suppose there exist positive constants and so that for all . Let be the identity mapping. That is, for all . We will prove that is a homeomorphism. We know that is a bijection, so we only need verify that and are continuous. Let be given, and let . Let . Suppose so that . Then .  Thus, is continuous. The same argument shows that is also continuous. Therefore, is a homeomorphism between and .      Are and topologically equivalent? Explain.    Are and topologically equivalent? Explain.    Do you expect that and are topologically equivalent. Explain without doing any calculations or comparisons.    "
},
{
  "id": "def_MS_topological_equivalence",
  "level": "2",
  "url": "sec_top_equiv.html#def_MS_topological_equivalence",
  "type": "Definition",
  "number": "14.8",
  "title": "",
  "body": " topologically equivalent   Two topological spaces and are topologically equivalent if there is a continuous bijection such that is also continuous.   "
},
{
  "id": "p-1747",
  "level": "2",
  "url": "sec_top_equiv.html#p-1747",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homeomorphism "
},
{
  "id": "def_Homeomorphism",
  "level": "2",
  "url": "sec_top_equiv.html#def_Homeomorphism",
  "type": "Definition",
  "number": "14.9",
  "title": "",
  "body": " homeomorphism   Let and be topological spaces. A function is a homeomorphism if is a continuous bijection such that is also continuous.   "
},
{
  "id": "p-1749",
  "level": "2",
  "url": "sec_top_equiv.html#p-1749",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homeomorphic "
},
{
  "id": "theorem-44",
  "level": "2",
  "url": "sec_top_equiv.html#theorem-44",
  "type": "Theorem",
  "number": "14.10",
  "title": "",
  "body": "  Let be a set on which two metrics and are defined. If there exist positive constants and so that for all , then is topologically equivalent to .    Let be a set on which two metrics and are defined. Suppose there exist positive constants and so that for all . Let be the identity mapping. That is, for all . We will prove that is a homeomorphism. We know that is a bijection, so we only need verify that and are continuous. Let be given, and let . Let . Suppose so that . Then .  Thus, is continuous. The same argument shows that is also continuous. Therefore, is a homeomorphism between and .   "
},
{
  "id": "activity-71",
  "level": "2",
  "url": "sec_top_equiv.html#activity-71",
  "type": "Activity",
  "number": "14.4",
  "title": "",
  "body": "  Are and topologically equivalent? Explain.    Are and topologically equivalent? Explain.    Do you expect that and are topologically equivalent. Explain without doing any calculations or comparisons.   "
},
{
  "id": "sec_relations",
  "level": "1",
  "url": "sec_relations.html",
  "type": "Section",
  "number": "",
  "title": "Relations",
  "body": " Relations  We use the word equivalent deliberately when talking about metric or topological equivalence. Recall that equivalence is a word used with relations, and that a relation is a way to compare two elements from a set. We are familiar with many relations on sets, , , on the integers, for example.   relation   A relation on a set is a subset of .    For example, the subset of is the relation we call equals. If is a relation on a set , we usually suppress the set notation and write if and say that is related to . In this case we often refer to as the relation instead of the set . Sometimes we use familiar symbols for special relations. For example, we write if .  When discussing relations, there are three specific properties that we consider.   A relation on a set is reflexive if for all .    A relation on a set is symmetric if whenever in we also have .    A relation on a set is transitive if whenever and in we also have .     When we use the word equivalence , we are referring to an equivalence relation.   equivalence relation   An equivalence relation is a relation on a set that is reflexive, symmetric, and transitive.      Explain why metric equivalence is an equivalence relation.    Explain why topological equivalence is an equivalence relation.    Equivalence relations are important because an equivalence relation on a set partitions the set into a disjoint union of equivalence classes. Since topological equivalence is an equivalence relation, we can treat the spaces that are topologically equivalent to each other as being essentially the same space from a topological perspective. Under the relation of homeomorphism we call the equivalence classes homeomorphism classes.  "
},
{
  "id": "definition-59",
  "level": "2",
  "url": "sec_relations.html#definition-59",
  "type": "Definition",
  "number": "14.11",
  "title": "",
  "body": " relation   A relation on a set is a subset of .   "
},
{
  "id": "p-1760",
  "level": "2",
  "url": "sec_relations.html#p-1760",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflexive symmetric transitive "
},
{
  "id": "definition-60",
  "level": "2",
  "url": "sec_relations.html#definition-60",
  "type": "Definition",
  "number": "14.12",
  "title": "",
  "body": " equivalence relation   An equivalence relation is a relation on a set that is reflexive, symmetric, and transitive.   "
},
{
  "id": "activity-72",
  "level": "2",
  "url": "sec_relations.html#activity-72",
  "type": "Activity",
  "number": "14.5",
  "title": "",
  "body": "  Explain why metric equivalence is an equivalence relation.    Explain why topological equivalence is an equivalence relation.   "
},
{
  "id": "p-1768",
  "level": "2",
  "url": "sec_relations.html#p-1768",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homeomorphism "
},
{
  "id": "sec_top_invar",
  "level": "1",
  "url": "sec_top_invar.html",
  "type": "Section",
  "number": "",
  "title": "Topological Invariants",
  "body": " Topological Invariants  Homeomorphic topological spaces are essentially the same from a topological perspective, and they share many properties, but not all. The properties they share are called topological invariants or topological properties .   topological property  topological invariant   A property of a topological space is a topological property (or topological invariant ) if every topological space homeomorphic to has the same property.      Which of the following are topological invariants? That is for topological spaces and , if and are homeomorphic space and has the property, does it follow that must also have that property?     has the indiscrete topology     has the discrete topology     has the finite complement topology     contains the number 2     contains exactly 13 elements    "
},
{
  "id": "p-1769",
  "level": "2",
  "url": "sec_top_invar.html#p-1769",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topological invariants topological properties "
},
{
  "id": "definition-61",
  "level": "2",
  "url": "sec_top_invar.html#definition-61",
  "type": "Definition",
  "number": "14.13",
  "title": "",
  "body": " topological property  topological invariant   A property of a topological space is a topological property (or topological invariant ) if every topological space homeomorphic to has the same property.   "
},
{
  "id": "activity-73",
  "level": "2",
  "url": "sec_top_invar.html#activity-73",
  "type": "Activity",
  "number": "14.6",
  "title": "",
  "body": "  Which of the following are topological invariants? That is for topological spaces and , if and are homeomorphic space and has the property, does it follow that must also have that property?     has the indiscrete topology     has the discrete topology     has the finite complement topology     contains the number 2     contains exactly 13 elements   "
},
{
  "id": "sec_cont_top_summ",
  "level": "1",
  "url": "sec_cont_top_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A function from a topological space to a topological space is continuous if is open in whenever is open in .    Two metric spaces and are metrically equivalent if there is a bijection such that for all and . That is, and are metrically equivalent if there is a isometry from to such that is also an isometry. Topological equivalence is a less stringent condition. Two topological spaces and are topologically equivalent if there is a continuous function from to such that is also continuous. That is, and are topologically equivalent if there is a homeomorphism between to .    A homeomorphism between topological spaces and is a continuous function from to such that is also continuous. Two topological spaces and are homeomorphic if there is a homeomorphism .    A topological invariant is any property that topological space has that must also be a property of any topological space homeomorphic to . We can sometimes use topological invariants to determine if two topological spaces are not homeomorphic.     "
},
{
  "id": "sec_cont_top_exer",
  "level": "1",
  "url": "sec_cont_top_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let and be metrically equivalent metric spaces, and let be a bijection such that for all . Prove that for all and in .    Let and be topological spaces, and let be a homeomorphism. Let be a subset of .   If is a limit point of , must be a limit point of ? Prove your answer.   If is an interior point of , must be an interior point of ? Prove your answer.   If is a boundary point of , must be a boundary point of ? Prove your answer.    Let and be metrically equivalent metric spaces. Show that and are topologically equivalent using the metric topologies.    Prove that if and are topological spaces, and is a function, then is continuous if and only if is a closed set in whenever is a closed set in .    Let , , and be topological spaces.   Let and be continuous functions. Prove that is a continuous function.    could be helpful here.   Let be a homeomorphism. Let be a function from to and let be a function from to .   Prove that is continuous if and only if is continuous.   Prove that is continuous if and only if is continuous.    Let with topology .   Find a function that is continuous at exactly one point, or show that no such function exists.   Find a function that is continuous at exactly two points, or show that no such function exists.   Find a function that is continuous at exactly three points, or show that no such function exists.    Consider and equipped with the Euclidean topology. Let be a function and let be the graph of . Note that is a subspace of and is a topological space using the subspace topology.   Show that if is a continuous function, then is homeomorphic to .   If we remove the condition that is continuous, must it still be the case that is homeomorphic to ? Prove your conjecture.    Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and .   Let be a fixed point in . Is the identity function defined by for all a homeomorphism from to ? Prove your answer.   Is homeomorphic to with the specific point ? Prove your answer.    A topological space is embedded in a topological space if there is a homeomorphism from to some subspace of . The homeomorphism is called an embedding .   Show that if is the open interval with the Euclidean metric topology, then can be embedded in the topological space with the Euclidean metric topology.   Show that there exist non-homeomorphic topological spaces and for which can be embedded in and can be embedded in .    Let be a two element set.   Find all of the distinct topologies on . Be sure to explain how you know you have identified all of the topologies.   Determine the distinct homeomorphism classes of topological spaces on two elements. Justify your response.    Let . There are 29 distinct topologies on , shown below. Determine the number of distinct homeomorphism classes for these 29 topologies and identify the elements of each homeomorphism class. Justify your answers.                                                                                                                   the discrete topology    Show that property is a topological property for each . (See for definitions of the separation axioms.)    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a continuous function between topological spaces and , then for every open subset of , is open in .   If is the finite complement topology, then mapping to is continuous.   If is a bijective function between topological spaces and , and for every open subset of , is open in , then is a homeomorphism.   If and are topological space with the discrete topologies, and if is a bijection, then the spaces and are homeomorphic.   Let be a set and let and be equivalence relations on . Then is also an equivalence relation on .   Let be a set and let and be equivalence relations on . Then is also an equivalence relation on .   "
},
{
  "id": "ex_isometry_reverse",
  "level": "2",
  "url": "sec_cont_top_exer.html#ex_isometry_reverse",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let and be metrically equivalent metric spaces, and let be a bijection such that for all . Prove that for all and in .  "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-160",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let and be topological spaces, and let be a homeomorphism. Let be a subset of .   If is a limit point of , must be a limit point of ? Prove your answer.   If is an interior point of , must be an interior point of ? Prove your answer.   If is a boundary point of , must be a boundary point of ? Prove your answer.  "
},
{
  "id": "ex_me_implies_te",
  "level": "2",
  "url": "sec_cont_top_exer.html#ex_me_implies_te",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be metrically equivalent metric spaces. Show that and are topologically equivalent using the metric topologies.  "
},
{
  "id": "ex_closed_sets_continuity_TS",
  "level": "2",
  "url": "sec_cont_top_exer.html#ex_closed_sets_continuity_TS",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove that if and are topological spaces, and is a function, then is continuous if and only if is a closed set in whenever is a closed set in .  "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-163",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let , , and be topological spaces.   Let and be continuous functions. Prove that is a continuous function.    could be helpful here.   Let be a homeomorphism. Let be a function from to and let be a function from to .   Prove that is continuous if and only if is continuous.   Prove that is continuous if and only if is continuous.  "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-164",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let with topology .   Find a function that is continuous at exactly one point, or show that no such function exists.   Find a function that is continuous at exactly two points, or show that no such function exists.   Find a function that is continuous at exactly three points, or show that no such function exists.  "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-165",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Consider and equipped with the Euclidean topology. Let be a function and let be the graph of . Note that is a subspace of and is a topological space using the subspace topology.   Show that if is a continuous function, then is homeomorphic to .   If we remove the condition that is continuous, must it still be the case that is homeomorphic to ? Prove your conjecture.  "
},
{
  "id": "exercise-166",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-166",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and .   Let be a fixed point in . Is the identity function defined by for all a homeomorphism from to ? Prove your answer.   Is homeomorphic to with the specific point ? Prove your answer.  "
},
{
  "id": "exercise-167",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-167",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " A topological space is embedded in a topological space if there is a homeomorphism from to some subspace of . The homeomorphism is called an embedding .   Show that if is the open interval with the Euclidean metric topology, then can be embedded in the topological space with the Euclidean metric topology.   Show that there exist non-homeomorphic topological spaces and for which can be embedded in and can be embedded in .  "
},
{
  "id": "exercise-168",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-168",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let be a two element set.   Find all of the distinct topologies on . Be sure to explain how you know you have identified all of the topologies.   Determine the distinct homeomorphism classes of topological spaces on two elements. Justify your response.  "
},
{
  "id": "exercise-169",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-169",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let . There are 29 distinct topologies on , shown below. Determine the number of distinct homeomorphism classes for these 29 topologies and identify the elements of each homeomorphism class. Justify your answers.                                                                                                                   the discrete topology  "
},
{
  "id": "exercise-170",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-170",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Show that property is a topological property for each . (See for definitions of the separation axioms.)  "
},
{
  "id": "exercise-171",
  "level": "2",
  "url": "sec_cont_top_exer.html#exercise-171",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a continuous function between topological spaces and , then for every open subset of , is open in .   If is the finite complement topology, then mapping to is continuous.   If is a bijective function between topological spaces and , and for every open subset of , is open in , then is a homeomorphism.   If and are topological space with the discrete topologies, and if is a bijection, then the spaces and are homeomorphic.   Let be a set and let and be equivalence relations on . Then is also an equivalence relation on .   Let be a set and let and be equivalence relations on . Then is also an equivalence relation on .  "
},
{
  "id": "sec_sub",
  "level": "1",
  "url": "sec_sub.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We have seen that a subset of a metric space is a subspace of using the restriction of the metric to . We do not have a metric in general topological spaces, so that approach can't be duplicated. But, we proved that the open sets in a subspace of a metric space are exactly the intersections of open sets in with . That idea can be transferred to topological spaces.  To make a subspace of a topological space into a topological space, we need to define a topology on .    Let be a topological space and a nonempty subset of . It is reasonable to use the open sets in to define open sets in . More specifically, we might consider a subset of to be open in if is the intersection of with some open set in , as illustrated in . With this in mind we define as .   A potentially open subset in a subspace.      Show that is a topology on . The result of item (1) is that any subset of a topological space is also a topological space with topology .   subspace of a topological space   Let be a topological space. A subspace of is a nonempty subset of together with the topology .      For each of the following, is a topological space and is a topology on .   Let and . Consider the subset and list the open sets in the subspace topology . Now consider . What is the name of the subspace topology on this subset of ?   Consider with the indiscrete topology. What are the open sets in the subspace topology on ? Now generalize to any nonempty set in the indiscrete topology.   Let with the discrete topology. What are the open sets in the subspace topology on . Now generalize to any nonempty set in the discrete topology.   Let with . What are the open sets in the subspace ? Is every open set in an open set in ? Explain.   Let with the finite complement topology. What are the open sets in the subspace topology on ? Can you generalize this to the subspace topology on any finite subset of ?   Let with the finite complement topology. What are the open sets in the subspace topology on the even integers? Can you generalize this to the subspace topology on any infinite subset of ?    "
},
{
  "id": "exploration-14",
  "level": "2",
  "url": "sec_sub.html#exploration-14",
  "type": "Preview Activity",
  "number": "15.1",
  "title": "",
  "body": "  Let be a topological space and a nonempty subset of . It is reasonable to use the open sets in to define open sets in . More specifically, we might consider a subset of to be open in if is the intersection of with some open set in , as illustrated in . With this in mind we define as .   A potentially open subset in a subspace.      Show that is a topology on . The result of item (1) is that any subset of a topological space is also a topological space with topology .   subspace of a topological space   Let be a topological space. A subspace of is a nonempty subset of together with the topology .      For each of the following, is a topological space and is a topology on .   Let and . Consider the subset and list the open sets in the subspace topology . Now consider . What is the name of the subspace topology on this subset of ?   Consider with the indiscrete topology. What are the open sets in the subspace topology on ? Now generalize to any nonempty set in the indiscrete topology.   Let with the discrete topology. What are the open sets in the subspace topology on . Now generalize to any nonempty set in the discrete topology.   Let with . What are the open sets in the subspace ? Is every open set in an open set in ? Explain.   Let with the finite complement topology. What are the open sets in the subspace topology on ? Can you generalize this to the subspace topology on any finite subset of ?   Let with the finite complement topology. What are the open sets in the subspace topology on the even integers? Can you generalize this to the subspace topology on any infinite subset of ?   "
},
{
  "id": "sec_subspace_top",
  "level": "1",
  "url": "sec_subspace_top.html",
  "type": "Section",
  "number": "",
  "title": "The Subspace Topology",
  "body": " The Subspace Topology  subspace topology  induced topology  relative topology  relatively open set  In our preview activity, we saw that the intersection of the open sets in a topological space with any nonempty subset of forms a topology for . We then have as a subspace of .  The topology in is called the subspace topology , the induced topology , or the relative topology . In our preview activity we saw that sets that are open in a subspace of a topological space need not be open in . So we call the sets in  relatively open .  Once we have defined relatively open sets, we can then consider how to define relatively closed sets.    Let be a topological space, and let be a subset of .   relatively closed set  Recall that a subset of a topological space is closed if its complement is open. Given that is a topological space, how is a closed set in defined? Such a set will be called relatively closed .    Recall that a subset of is relatively open if and only if for some open subset of . With this in mind, how might we expect a relatively closed set in to be related to a closed set in ? State and prove a theorem for this result.    "
},
{
  "id": "p-1868",
  "level": "2",
  "url": "sec_subspace_top.html#p-1868",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace topology induced topology relative topology relatively open "
},
{
  "id": "activity-74",
  "level": "2",
  "url": "sec_subspace_top.html#activity-74",
  "type": "Activity",
  "number": "15.2",
  "title": "",
  "body": "  Let be a topological space, and let be a subset of .   relatively closed set  Recall that a subset of a topological space is closed if its complement is open. Given that is a topological space, how is a closed set in defined? Such a set will be called relatively closed .    Recall that a subset of is relatively open if and only if for some open subset of . With this in mind, how might we expect a relatively closed set in to be related to a closed set in ? State and prove a theorem for this result.   "
},
{
  "id": "sec_base_sub",
  "level": "1",
  "url": "sec_base_sub.html",
  "type": "Section",
  "number": "",
  "title": "Bases for Subspaces",
  "body": " Bases for Subspaces  Recall that a basis for a topological space is a collection of sets that generate all of the open sets through unions. If we have a basis for a topological space , and if is a subspace of , we might ask if we can find a basis from in a natural way.    Let be a topological space with basis , and let be a subspace of .    There is a natural candidate to consider as a basis for . How do you think we should define the elements in ?    Recall that a set is a basis for a topological space if   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .   Show that your set from (a) is a basis for the induced topology on .    "
},
{
  "id": "activity-75",
  "level": "2",
  "url": "sec_base_sub.html#activity-75",
  "type": "Activity",
  "number": "15.3",
  "title": "",
  "body": "  Let be a topological space with basis , and let be a subspace of .    There is a natural candidate to consider as a basis for . How do you think we should define the elements in ?    Recall that a set is a basis for a topological space if   For each , there is a set in that contains .    If is an element of for some , then there is a set such that .   Show that your set from (a) is a basis for the induced topology on .   "
},
{
  "id": "sec_open_int_rn",
  "level": "1",
  "url": "sec_open_int_rn.html",
  "type": "Section",
  "number": "",
  "title": "Open Intervals and <span class=\"process-math\">\\(\\R\\)<\/span>",
  "body": " Open Intervals and  If we think of a homeomorphism as allowing us to stretch or bend a space, it is reasonable to think that we could stretch an open interval of the form infinitely in both directions without altering the nature of the open sets. That is, we should expect that with the standard topology is homeomorphic to with the subspace topology.    Let and be real numbers with . To show that is homeomorphic to , we need a continuous bijection from to whose inverse is also continuous.    First we demonstrate that and are homeomorphic using the Euclidean metric topology. Let be defined by .   Explain why maps to .   Explain why is an injection.   Explain why is a surjection.   Explain why and are continuous.   Use a result from calculus.    The result of (a) is that and are homeomorphic spaces. To complete the argument that is homeomorphic to , define a function and explain why your is a homeomorphism.    It is left to to show that is also homeomorphic to any interval of the form or . Later we will determine if is homeomorphic to intervals of the form , , or .  "
},
{
  "id": "activity-76",
  "level": "2",
  "url": "sec_open_int_rn.html#activity-76",
  "type": "Activity",
  "number": "15.4",
  "title": "",
  "body": "  Let and be real numbers with . To show that is homeomorphic to , we need a continuous bijection from to whose inverse is also continuous.    First we demonstrate that and are homeomorphic using the Euclidean metric topology. Let be defined by .   Explain why maps to .   Explain why is an injection.   Explain why is a surjection.   Explain why and are continuous.   Use a result from calculus.    The result of (a) is that and are homeomorphic spaces. To complete the argument that is homeomorphic to , define a function and explain why your is a homeomorphism.   "
},
{
  "id": "sec_sub_summ",
  "level": "1",
  "url": "sec_sub_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A subspace of a topological space is any nonempty subset of the topological space endowed with the subspace topology.    An open subset in the subspace topology for a subset of a topological space is any set of the form , where is an open set in .    The relatively open sets are the open sets in a subspace topology. The relatively closed sets are complements of the relatively open sets in a subspace topology. That is, a relatively closed set in the subspace of a topological space are the sets of the form , where is a closed set in .    The topological space with the standard topology is homeomorphic to any open interval as well as open intervals of the form or for any real numbers and .     "
},
{
  "id": "sec_sub_exer",
  "level": "1",
  "url": "sec_sub_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let and be topological spaces and be a continuous function. If is a subspace of , prove that is also continuous.    Let be a topological space, let be a subspace of , and let be a subspace of . Show that the subspace topology that inherits from is the same as the subspace topology that inherits from .    Let be a subspace of a topological space and let be a subset of .   Prove that a point in is a limit point of in the subspace topology for if and only if is a limit point of in the topology on .   Prove that the closure of in the subspace topology for is equal to , where is the closure of in .    Show that is homeomorphic, with the standard topology, to any interval of the form or .    Let be a topological space.   Let be an open subset of . Prove that a subset of is open in if and only if is open in .   Let be a closed subset of . Prove that a subset of is closed in if and only if is closed in .    A property of a topological space is said to be hereditary if that property is inherited by every subspace. We state this more formally in the following definition.   hereditary property   A property of a topological space is hereditary if every subspace of also has property .    Show that properties , , and are hereditary. (The separation axioms are found in .) The fact that is not hereditary is somewhat difficult. One example is the Tychonoff plank (which is normal) with the Deleted Tychonoff plank (which is not normal) as subspace. An interested reader can consult Counterexamples in Topology (2nd ed.) , Lynn Arthur Steen and J. Arthur Seebach, Jr., Dover Publications, 1978.    Suppose that is a homeomorphism from a topological space to a topological space . Let . Must the subspace of be homeomorphic to the subspace of ? Prove your conjecture.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If has the discrete topology, then every subspace of has the discrete topology.   If is a topological space that does not have the discrete topology, then no subspace of has the discrete topology.   If is a continuous function between topological spaces and , and is Hausdorff, then the subspace of is Hausdorff.   If is a subspace of a topological space and is a subset of , then the closure of in the subspace topology for equals , where is the closure of in .   If is a subspace of a topological space and is a subset of , then the interior of in the subspace topology for equals , where is the interior of in .   "
},
{
  "id": "exercise-172",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-172",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let and be topological spaces and be a continuous function. If is a subspace of , prove that is also continuous.  "
},
{
  "id": "exercise-173",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-173",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a topological space, let be a subspace of , and let be a subspace of . Show that the subspace topology that inherits from is the same as the subspace topology that inherits from .  "
},
{
  "id": "exercise-174",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-174",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a subspace of a topological space and let be a subset of .   Prove that a point in is a limit point of in the subspace topology for if and only if is a limit point of in the topology on .   Prove that the closure of in the subspace topology for is equal to , where is the closure of in .  "
},
{
  "id": "ex_R_intervals",
  "level": "2",
  "url": "sec_sub_exer.html#ex_R_intervals",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Show that is homeomorphic, with the standard topology, to any interval of the form or .  "
},
{
  "id": "exercise-176",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-176",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let be a topological space.   Let be an open subset of . Prove that a subset of is open in if and only if is open in .   Let be a closed subset of . Prove that a subset of is closed in if and only if is closed in .  "
},
{
  "id": "exercise-177",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-177",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " A property of a topological space is said to be hereditary if that property is inherited by every subspace. We state this more formally in the following definition.   hereditary property   A property of a topological space is hereditary if every subspace of also has property .    Show that properties , , and are hereditary. (The separation axioms are found in .) The fact that is not hereditary is somewhat difficult. One example is the Tychonoff plank (which is normal) with the Deleted Tychonoff plank (which is not normal) as subspace. An interested reader can consult Counterexamples in Topology (2nd ed.) , Lynn Arthur Steen and J. Arthur Seebach, Jr., Dover Publications, 1978.  "
},
{
  "id": "exercise-178",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-178",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Suppose that is a homeomorphism from a topological space to a topological space . Let . Must the subspace of be homeomorphic to the subspace of ? Prove your conjecture.  "
},
{
  "id": "exercise-179",
  "level": "2",
  "url": "sec_sub_exer.html#exercise-179",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If has the discrete topology, then every subspace of has the discrete topology.   If is a topological space that does not have the discrete topology, then no subspace of has the discrete topology.   If is a continuous function between topological spaces and , and is Hausdorff, then the subspace of is Hausdorff.   If is a subspace of a topological space and is a subset of , then the closure of in the subspace topology for equals , where is the closure of in .   If is a subspace of a topological space and is a subset of , then the interior of in the subspace topology for equals , where is the interior of in .  "
},
{
  "id": "sec_quotients",
  "level": "1",
  "url": "sec_quotients.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We are familiar with the word quotient when working with rational numbers. That is, the fraction is the quotient of by , and the set of rational numbers is the collection of all defined quotients of integers. The word quotient seems to have come from the latin word quotiens , which can be translated as how often or how many times . We can think of the fraction as dividing a unit ( into two pieces. So we often apply the word quotient to any kind of construction that divides a set into pieces. Another familiar quotient construction is the set , the set of quotients of integers after we divide by . Another way to think of is as a quotient , where is the set of multiples of and two integers and are identified with each other (or are equivalent ) if . This defines the relation of congruence module on , and the elements of are the equivalence classes for this relation. We make similar constructions in many branches of mathematics by defining an equivalence relation on a set, and we then divide the set into pieces (the equivalence classes) and call the set of equivalence classes a quotient space . We explore the concept of quotient spaces of topological spaces in this section.  As an example, take the interval in and bend it to be able to glue the endpoints together. The resulting object is a circle. By identifying the endpoints and of the interval, we are able to create a new topological space. We can view this gluing or identifying of points in the space in a formal way that allows us to recognize the resulting space as a quotient space.  "
},
{
  "id": "p-1916",
  "level": "2",
  "url": "sec_quotients.html#p-1916",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient equivalent quotient space "
},
{
  "id": "sec_quotient_top",
  "level": "1",
  "url": "sec_quotient_top.html",
  "type": "Section",
  "number": "",
  "title": "The Quotient Topology",
  "body": " The Quotient Topology  Given a topological space and a surjection from to a set , we can use the topology on to define a topology on . This topology on identifies points in through the function . The resulting function on is called a quotient topology. The quotient topology gives us a way of creating a topological space which models gluing and collapsing parts of a topological space.    Let and let . Let and define by .  Our goal in this activity is to define a topology on that is related to the topology on via .    We know the sets in that are open. So let us consider the sets in such that is open in . Define to be this set. That is . Find all of the sets in .    Show that is a topology on .    Explain why is continuous.    Show that is the largest topology on for which is continuous. That is, if is a topology on with , then is not continuous.    "
},
{
  "id": "p-1918",
  "level": "2",
  "url": "sec_quotient_top.html#p-1918",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient "
},
{
  "id": "exploration-15",
  "level": "2",
  "url": "sec_quotient_top.html#exploration-15",
  "type": "Preview Activity",
  "number": "16.1",
  "title": "",
  "body": "  Let and let . Let and define by .  Our goal in this activity is to define a topology on that is related to the topology on via .    We know the sets in that are open. So let us consider the sets in such that is open in . Define to be this set. That is . Find all of the sets in .    Show that is a topology on .    Explain why is continuous.    Show that is the largest topology on for which is continuous. That is, if is a topology on with , then is not continuous.   "
},
{
  "id": "sec_quotient_space",
  "level": "1",
  "url": "sec_quotient_space.html",
  "type": "Section",
  "number": "",
  "title": "Quotient Spaces",
  "body": " Quotient Spaces  As we saw in our preview activity, if we have a surjection from a topological space to a set , we were able to define a topology on by making the open sets the sets such that is open in . This is how we will create what is called the quotient topology . Before we can define the quotient topology, we need to know that this construction always makes a topology.    Let be a topological space, let be a set, and let be a surjection. Let .    Why are and in ?    Let be a collection of sets in for in some indexing set .   Show that is in .   If is finite, show that is in .    What conclusion can we draw about ?     allows us to define the quotient topology.   quotient topology  quotient map  quotient space   Let be a topological space, let be a set, and let be a surjection.   The quotient topology on is the set .    Any function is a quotient map if is surjective and for , is open in if and only if is open in .    If is a quotient map, then the space is the quotient space of determined by .         Let with standard topology, let , and define by Find all of the open sets in the quotient topology.    Let with standard topology, let , and define by , where is the largest integer less than or equal to , (For example , and so . The function defined by is also called the floor function. Be careful, note that .) Determine the sets in the quotient topology.   The graph of .     The graph of on is shown in .    Another perspective of the quotient topology utilizes the fact that any equivalence relation on a set partitions into a union of disjoint equivalence classes . There is a natural surjection from to the space of equivalence classes given by . We investigate this perspective in the next activity.   Let and let . Then is a topological space. Let and . Define a relation on such that if and are both in or both in . Assume that is an equivalence relation. The sets and are the equivalence classes for this relation. That is and . Let . Then we can define by sending to the set to which it belongs. That is, for , or .  Determine the sets in the quotient topology on .   The partition of in into the disjoint union of sets and defines an equivalence relation on where if and are both in the same set or . That is, and . In this context, the sets and are equivalence classes  and , where is the equivalence class of . This leads to a general construction.   quotient space  identification space If is a topological space and is an equivalence relation on , we can let be the set of distinct equivalence classes of under . Then defined by is a surjection and has the quotient topology. The space is called a quotient space . The space is also called an identification space because the equivalence relation identifies points in the set to be thought of as the same. This allows us to visualize quotient spaces as resulting from gluing or collapsing parts of the space .   A tube as the identification space .      Let and let with standard topology. Define a relation on by if and , if . It is straightforward to show that is an equivalence relation. Let us consider what the identification space looks like. The space is the unit square as shown in . All points in the interior of the square are identified only with themselves. However, the top side and bottom side are identified with each other in the same direction. Think of as a piece of paper. We roll up the sides of the square to make the top and bottom sides coincide. The result is that is the cylinder as shown in .      Quotient spaces can be difficult to describe. This activity presents a few more examples.    Let with standard topology and define an equivalence relation on by and for all not equal to or . What does the quotient space look like?   From left to right: the identifications for parts (i), (ii), and (iii)         Think about the relation as gluing the points and together.    Describe quotient spaces of with standard topology given by the following equivalence relations . Depictions of the identifications are shown in . (Here is the closed interval .)    if and and when .  Möbius strip   if and , for , for , and . (This space is called a Möbius strip.)    if and and if and are boundary points.     Klein bottle Many other interesting identification spaces can be made. For example, let and define by if and , for , for . This identification is illustrated in . The resulting identification space is a Klein bottle. A nice illustration of this can be seen at maths.org .   Identifications for the Klein Bottle.    "
},
{
  "id": "p-1925",
  "level": "2",
  "url": "sec_quotient_space.html#p-1925",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient topology "
},
{
  "id": "act_quot_topology",
  "level": "2",
  "url": "sec_quotient_space.html#act_quot_topology",
  "type": "Activity",
  "number": "16.2",
  "title": "",
  "body": "  Let be a topological space, let be a set, and let be a surjection. Let .    Why are and in ?    Let be a collection of sets in for in some indexing set .   Show that is in .   If is finite, show that is in .    What conclusion can we draw about ?   "
},
{
  "id": "definition-64",
  "level": "2",
  "url": "sec_quotient_space.html#definition-64",
  "type": "Definition",
  "number": "16.1",
  "title": "",
  "body": " quotient topology  quotient map  quotient space   Let be a topological space, let be a set, and let be a surjection.   The quotient topology on is the set .    Any function is a quotient map if is surjective and for , is open in if and only if is open in .    If is a quotient map, then the space is the quotient space of determined by .      "
},
{
  "id": "activity-78",
  "level": "2",
  "url": "sec_quotient_space.html#activity-78",
  "type": "Activity",
  "number": "16.3",
  "title": "",
  "body": "  Let with standard topology, let , and define by Find all of the open sets in the quotient topology.    Let with standard topology, let , and define by , where is the largest integer less than or equal to , (For example , and so . The function defined by is also called the floor function. Be careful, note that .) Determine the sets in the quotient topology.   The graph of .     The graph of on is shown in .   "
},
{
  "id": "act_quotient_er",
  "level": "2",
  "url": "sec_quotient_space.html#act_quotient_er",
  "type": "Activity",
  "number": "16.4",
  "title": "",
  "body": " Let and let . Then is a topological space. Let and . Define a relation on such that if and are both in or both in . Assume that is an equivalence relation. The sets and are the equivalence classes for this relation. That is and . Let . Then we can define by sending to the set to which it belongs. That is, for , or .  Determine the sets in the quotient topology on .  "
},
{
  "id": "p-1944",
  "level": "2",
  "url": "sec_quotient_space.html#p-1944",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient space identification "
},
{
  "id": "F_Quotient_tube",
  "level": "2",
  "url": "sec_quotient_space.html#F_Quotient_tube",
  "type": "Figure",
  "number": "16.3",
  "title": "",
  "body": " A tube as the identification space .   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec_quotient_space.html#example-9",
  "type": "Example",
  "number": "16.4",
  "title": "",
  "body": "  Let and let with standard topology. Define a relation on by if and , if . It is straightforward to show that is an equivalence relation. Let us consider what the identification space looks like. The space is the unit square as shown in . All points in the interior of the square are identified only with themselves. However, the top side and bottom side are identified with each other in the same direction. Think of as a piece of paper. We roll up the sides of the square to make the top and bottom sides coincide. The result is that is the cylinder as shown in .   "
},
{
  "id": "activity-80",
  "level": "2",
  "url": "sec_quotient_space.html#activity-80",
  "type": "Activity",
  "number": "16.5",
  "title": "",
  "body": "  Quotient spaces can be difficult to describe. This activity presents a few more examples.    Let with standard topology and define an equivalence relation on by and for all not equal to or . What does the quotient space look like?   From left to right: the identifications for parts (i), (ii), and (iii)         Think about the relation as gluing the points and together.    Describe quotient spaces of with standard topology given by the following equivalence relations . Depictions of the identifications are shown in . (Here is the closed interval .)    if and and when .  Möbius strip   if and , for , for , and . (This space is called a Möbius strip.)    if and and if and are boundary points.   "
},
{
  "id": "F_Klein_bottle",
  "level": "2",
  "url": "sec_quotient_space.html#F_Klein_bottle",
  "type": "Figure",
  "number": "16.6",
  "title": "",
  "body": " Identifications for the Klein Bottle.   "
},
{
  "id": "sec_find_quotient_space",
  "level": "1",
  "url": "sec_find_quotient_space.html",
  "type": "Section",
  "number": "",
  "title": "Identifying Quotient Spaces",
  "body": " Identifying Quotient Spaces  Suppose is a topological space and is a set, and let be a surjection. We can define a relation on by if and only if . It is straightforward to show that is an equivalence relation, the details are left for . From this we can see that our two approaches to defining the quotient topology and quotient spaces are really the same.  Oftentimes we have a topological space and a relation on , and we would like to have an effective way to be able to identify the quotient space as homeomorphic to some familiar topological space . That is, we want to be able to show that there is a homeomorphism from to .    Consider the following situation. Let with the standard topology and define the relation on by if . It is straightforward to show that is an equivalence relation. By this equivalence relation, we have for every real number . This identifies with the interval , where and are identified under the relation. So we might expect that is homeomorphic to the circle as a subspace of with the standard topology. Now the objective is to find a homeomorphism between and . Since every point on the unit circle has the form for some real number , we might try defining by . However, we have that , which means that , but and so is not well-defined. Another option might be . In this case, if , then and differ by a multiple of and so . We could then show that is a homeomorphism. We will continue this example shortly.    The following theorem encapsulates the above example.    Let and be sets and let be an equivalence relation on . Let be a function from to such that whenever in . Let be the set of equivalence classes of under the relation , and let be the standard map defined by . The function mapping to defined by for every is the unique function that satisfies .       is a statement about sets and functions, and there is no topology involved. We prove the theorem in this activity. Use the conditions stated in .    Show that is well-defined. That is, show that whenever in , then .    Prove that .    Show that the uniqueness of comes from the equation .    Now we present a final result that can be very helpful when working with quotient spaces.    Let be a topological space and let be an equivalence relation on . Consider the set to be a topological space with the quotient topology, and let be the standard surjection defined by . Let be a topological space with a continuous function such that whenever in . Then defined by is the unique continuous function satisfying .    The existence of as the unique function satisfying was established in . All that remains is to show that is continuous. Let be an open set in . Since is continuous, we know that is open in . If and , then as well. Thus, we can write as .  That is, is a union of equivalence classes. Now , so if , then . Thus, .  We conclude that is open in and is continuous.    Now we will see how to use to establish a homeomorphism from a quotient space of a given topological space to another topological space    We return to the situation from with under the standard topology and equivalence relation defined by if . We will use to show that is homeomorphic to the circle .   A basis element for .       Step 1  Define a continuous surjection that respects the relation. That is, we need to ensure that whenever in . We saw earlier that the function defined by respects the relation. Since every point on the unit circle is of the form for some real number , choosing makes and is a surjection. Now we need to demonstrate that is continuous. A collection of basic open sets in can be found by intersecting with open balls in as illustrated in . We can see that the basic open sets are arcs of the form for and in . Suppose and for angles and . Then is the union of intervals for . As a union of open intervals, we have that is open in . We have now found a continuous surjection from to that respects the relation.    Step 2  Find a continuous function from to . tells us that the function defined by is continuous. So is our candidate to be a homeomorphism.    Step 3  Show that is a bijection. Let . The fact that is a surjection means that there is a such that . It follows that and is a surjection. To demonstrate that is an injection, suppose for some . Then . It must be the case then that and differ by a multiple of . That is, for some integer . From this we have , and so . This makes and we conclude that is an injection.    Step 4  Show that is a homeomorphism. At this point we already know that is a continuous bijection, so the only item that remains is to show that is open whenever is open in . Let be the standard map. Let be a nonempty open set in . Then is open in . Thus, is a union of open intervals. Let be an interval contained in . From the definition of we have that is the open arc , which is open in . So is a union of open arcs in , which makes open in . Now , and is open in . We conclude that is a homeomorphism from to , and so is a quotient space of .       "
},
{
  "id": "exp_R_Z_quotient",
  "level": "2",
  "url": "sec_find_quotient_space.html#exp_R_Z_quotient",
  "type": "Example",
  "number": "16.7",
  "title": "",
  "body": "  Consider the following situation. Let with the standard topology and define the relation on by if . It is straightforward to show that is an equivalence relation. By this equivalence relation, we have for every real number . This identifies with the interval , where and are identified under the relation. So we might expect that is homeomorphic to the circle as a subspace of with the standard topology. Now the objective is to find a homeomorphism between and . Since every point on the unit circle has the form for some real number , we might try defining by . However, we have that , which means that , but and so is not well-defined. Another option might be . In this case, if , then and differ by a multiple of and so . We could then show that is a homeomorphism. We will continue this example shortly.   "
},
{
  "id": "thm_quotient_1",
  "level": "2",
  "url": "sec_find_quotient_space.html#thm_quotient_1",
  "type": "Theorem",
  "number": "16.8",
  "title": "",
  "body": "  Let and be sets and let be an equivalence relation on . Let be a function from to such that whenever in . Let be the set of equivalence classes of under the relation , and let be the standard map defined by . The function mapping to defined by for every is the unique function that satisfies .   "
},
{
  "id": "activity-81",
  "level": "2",
  "url": "sec_find_quotient_space.html#activity-81",
  "type": "Activity",
  "number": "16.6",
  "title": "",
  "body": "   is a statement about sets and functions, and there is no topology involved. We prove the theorem in this activity. Use the conditions stated in .    Show that is well-defined. That is, show that whenever in , then .    Prove that .    Show that the uniqueness of comes from the equation .   "
},
{
  "id": "thm_quotient_2",
  "level": "2",
  "url": "sec_find_quotient_space.html#thm_quotient_2",
  "type": "Theorem",
  "number": "16.9",
  "title": "",
  "body": "  Let be a topological space and let be an equivalence relation on . Consider the set to be a topological space with the quotient topology, and let be the standard surjection defined by . Let be a topological space with a continuous function such that whenever in . Then defined by is the unique continuous function satisfying .    The existence of as the unique function satisfying was established in . All that remains is to show that is continuous. Let be an open set in . Since is continuous, we know that is open in . If and , then as well. Thus, we can write as .  That is, is a union of equivalence classes. Now , so if , then . Thus, .  We conclude that is open in and is continuous.   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_find_quotient_space.html#example-11",
  "type": "Example",
  "number": "16.10",
  "title": "",
  "body": "  We return to the situation from with under the standard topology and equivalence relation defined by if . We will use to show that is homeomorphic to the circle .   A basis element for .       Step 1  Define a continuous surjection that respects the relation. That is, we need to ensure that whenever in . We saw earlier that the function defined by respects the relation. Since every point on the unit circle is of the form for some real number , choosing makes and is a surjection. Now we need to demonstrate that is continuous. A collection of basic open sets in can be found by intersecting with open balls in as illustrated in . We can see that the basic open sets are arcs of the form for and in . Suppose and for angles and . Then is the union of intervals for . As a union of open intervals, we have that is open in . We have now found a continuous surjection from to that respects the relation.    Step 2  Find a continuous function from to . tells us that the function defined by is continuous. So is our candidate to be a homeomorphism.    Step 3  Show that is a bijection. Let . The fact that is a surjection means that there is a such that . It follows that and is a surjection. To demonstrate that is an injection, suppose for some . Then . It must be the case then that and differ by a multiple of . That is, for some integer . From this we have , and so . This makes and we conclude that is an injection.    Step 4  Show that is a homeomorphism. At this point we already know that is a continuous bijection, so the only item that remains is to show that is open whenever is open in . Let be the standard map. Let be a nonempty open set in . Then is open in . Thus, is a union of open intervals. Let be an interval contained in . From the definition of we have that is the open arc , which is open in . So is a union of open arcs in , which makes open in . Now , and is open in . We conclude that is a homeomorphism from to , and so is a quotient space of .      "
},
{
  "id": "sec_quotients_summ",
  "level": "1",
  "url": "sec_quotients_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   Let be a topological space, let be a set, and let be a surjection. The quotient topology on is the set .    The function is a quotient topology as in the previous bullet is called a quotient map and the space is a quotient space.    A circle, a Möbius strip, a torus, and a sphere can all be realized as quotient spaces.     "
},
{
  "id": "sec_quotients_exer",
  "level": "1",
  "url": "sec_quotients_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": " Exercises   Let be a topological space, a set, and a surjection. Define the relation on by if and only if . Prove that is an equivalence relation.    Let be the real numbers with the standard topology and let be defined by What is the quotient topology?    Define an equivalence relation on by whenever and .   Prove that is an equivalence relation on .   The quotient space is a familiar space. Find that space and explain why it is the quotient space.    Find an example of a continuous surjection that is not a quotient map.    Let be a topological space and let be a subspace of . Define a relation on whose equivalence classes are and if . In this case the quotient space is denoted as (think of this space as obtained by crushing to a point and leaving everything else alone). Describe each of the following quotient spaces.    is the closed interval in and     ,    If and     Let be the topological space where and . Let .   Let be defined by , , , and . Find the quotient topology on defined by the function .   Let be defined by , , , and . Find the quotient topology on defined by the function .   Are the spaces and homeomorphic? If yes, write down a specific homeomorphism and explain why your mapping is a homeomorphism. If not, explain why not.    Let be the unit disk in with the standard topology, and let be the boundary of . Describe the quotient spaces for each equivalence relation (assume that points are similar to themselves). Let and .    if for in     if for in     if and are diagonally opposite each other for in     Let where is the interval with the standard metric topology, and define an equivalence relation on by when and for all other .   Describe the quotient space , and describe the quotient topology.   Show that is not Hausdorff.    Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Let be the equivalence relation on defined by if . Describe the quotient space and then determine, with justification, the quotient topology on when    has the topology with     has the topology with .   real projective plane  In the process of developing techniques of drawing in perspective, renaissance artists found it necessary to consider a point at infinity where all lines intersect. This creates a geometry that extends the concept of the real plane. This new geometry is the real projective plane , which can be thought of as the quotient space of with the relation such that in if and only if there is a nonzero real number such that , , and . In the projective plane, parallel lines intersect at a point at infinity, just as they seem to with our human vision.   Show that is an equivalence relation.   Give a geometric description of the elements in the quotient space .   There are other ways to visualize . For example, explain why the real projective plane is homeomorphic to the quotient space of , where identifies antipodal points on . No formal proofs are necessary, but a convincing explanation is in order.   Since we identify antipodal points on in the space , we can think of this space in another way. If is a point on not on the equator, then its antipodal point is also not on the equator. So we can think of as the top hemisphere, along with the equator on which antipodal points are identified, as illustrated at left in .   Three perspectives of .        By projecting the points on the hemisphere down to the -plane, we can represent as a disk whose antipodal points are identified, as seen in the middle in . Use this last perspective to explain why can be realized as a square where opposite sides are identified in opposite directions as shown at right in .   The projective plane is a complicated object it cannot be embedded in and so it is not something that can be easily visualized. The projective plane is a non-orientable surface and is also important in classifying surfaces basically, every closed surface is made up of spheres, tori, and\/or projective planes. In this part of the exercise we see how the projective plane itself is made by adjoining a Möbius strip to a disk (think of sewing the boundary of Möbius strip to the perimeter of a disk).   Start with the model of shown at left in . Partition this object into three pieces as shown at right in . Explain why the shaded region in the middle figure, separated out at right in , is a Möbius strip.   Splitting the real projective plane.         The space that remains after we remove the Möbius strip from is shown at left in . The two spaces that follow are homeomorphic to . Describe the homeomorphisms that produce the spaces from . Then explain how is obtained by attaching a Möbius strip to a disk along its boundary.   Recognizing the space .            Let with the standard topology, and let with the standard topology. Let be defined by .   Show that is a continuous surjective function.   Prove that the quotient space of defined by is homeomorphic to .   retract retraction  Let be a topological space. A subspace of is a retract of (or that retracts onto ) if there is a continuous function such that for all . Such a map is called a retraction . Intuitively, a subspace of is a retract of if we can continually collapse (or retract) onto without moving any of the points in . Certain types of retracts, namely deformation retracts, are important in algebraic topology.   Show that every nonempty space can retract to a point.   Show that is a retract of .   Show that every retraction is a quotient map.   Show that if is Hausdorff and is a retract of , then must be a closed subset of .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Let be a surjection from a topological space to a nonempty set . The quotient topology on is the largest topology on such that is continuous.   Let with the Euclidean metric topology and define the relation on as if and are either both rational or both irrational. Then the quotient space is a two point space with the indiscrete topology.   Let be a surjection from a topological space to a nonempty set . The quotient topology on is the largest topology on such that is continuous.   Let with the Euclidean metric topology and define the relation on as if and are either both rational or both irrational. Then the quotient space is a two point space with the indiscrete topology.   If is a topological space, is a set, and is a surjection, then is open in the quotient topology whenever is open in .   If is an equivalence relation on a topological space , then the quotient space is the set of all equivalence classes of with the quotient topology.   "
},
{
  "id": "ex_sim_p_relation",
  "level": "2",
  "url": "sec_quotients_exer.html#ex_sim_p_relation",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let be a topological space, a set, and a surjection. Define the relation on by if and only if . Prove that is an equivalence relation.  "
},
{
  "id": "exercise-181",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-181",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be the real numbers with the standard topology and let be defined by What is the quotient topology?  "
},
{
  "id": "exercise-182",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-182",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Define an equivalence relation on by whenever and .   Prove that is an equivalence relation on .   The quotient space is a familiar space. Find that space and explain why it is the quotient space.  "
},
{
  "id": "exercise-183",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-183",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Find an example of a continuous surjection that is not a quotient map.  "
},
{
  "id": "exercise-184",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-184",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let be a topological space and let be a subspace of . Define a relation on whose equivalence classes are and if . In this case the quotient space is denoted as (think of this space as obtained by crushing to a point and leaving everything else alone). Describe each of the following quotient spaces.    is the closed interval in and     ,    If and   "
},
{
  "id": "exercise-185",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-185",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be the topological space where and . Let .   Let be defined by , , , and . Find the quotient topology on defined by the function .   Let be defined by , , , and . Find the quotient topology on defined by the function .   Are the spaces and homeomorphic? If yes, write down a specific homeomorphism and explain why your mapping is a homeomorphism. If not, explain why not.  "
},
{
  "id": "exercise-186",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-186",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be the unit disk in with the standard topology, and let be the boundary of . Describe the quotient spaces for each equivalence relation (assume that points are similar to themselves). Let and .    if for in     if for in     if and are diagonally opposite each other for in   "
},
{
  "id": "exercise-187",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-187",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let where is the interval with the standard metric topology, and define an equivalence relation on by when and for all other .   Describe the quotient space , and describe the quotient topology.   Show that is not Hausdorff.  "
},
{
  "id": "exercise-188",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-188",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Let be the equivalence relation on defined by if . Describe the quotient space and then determine, with justification, the quotient topology on when    has the topology with     has the topology with .  "
},
{
  "id": "exercise-189",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-189",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "real projective plane  In the process of developing techniques of drawing in perspective, renaissance artists found it necessary to consider a point at infinity where all lines intersect. This creates a geometry that extends the concept of the real plane. This new geometry is the real projective plane , which can be thought of as the quotient space of with the relation such that in if and only if there is a nonzero real number such that , , and . In the projective plane, parallel lines intersect at a point at infinity, just as they seem to with our human vision.   Show that is an equivalence relation.   Give a geometric description of the elements in the quotient space .   There are other ways to visualize . For example, explain why the real projective plane is homeomorphic to the quotient space of , where identifies antipodal points on . No formal proofs are necessary, but a convincing explanation is in order.   Since we identify antipodal points on in the space , we can think of this space in another way. If is a point on not on the equator, then its antipodal point is also not on the equator. So we can think of as the top hemisphere, along with the equator on which antipodal points are identified, as illustrated at left in .   Three perspectives of .        By projecting the points on the hemisphere down to the -plane, we can represent as a disk whose antipodal points are identified, as seen in the middle in . Use this last perspective to explain why can be realized as a square where opposite sides are identified in opposite directions as shown at right in .   The projective plane is a complicated object it cannot be embedded in and so it is not something that can be easily visualized. The projective plane is a non-orientable surface and is also important in classifying surfaces basically, every closed surface is made up of spheres, tori, and\/or projective planes. In this part of the exercise we see how the projective plane itself is made by adjoining a Möbius strip to a disk (think of sewing the boundary of Möbius strip to the perimeter of a disk).   Start with the model of shown at left in . Partition this object into three pieces as shown at right in . Explain why the shaded region in the middle figure, separated out at right in , is a Möbius strip.   Splitting the real projective plane.         The space that remains after we remove the Möbius strip from is shown at left in . The two spaces that follow are homeomorphic to . Describe the homeomorphisms that produce the spaces from . Then explain how is obtained by attaching a Möbius strip to a disk along its boundary.   Recognizing the space .          "
},
{
  "id": "exercise-190",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-190",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let with the standard topology, and let with the standard topology. Let be defined by .   Show that is a continuous surjective function.   Prove that the quotient space of defined by is homeomorphic to .  "
},
{
  "id": "exercise-191",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-191",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "retract retraction  Let be a topological space. A subspace of is a retract of (or that retracts onto ) if there is a continuous function such that for all . Such a map is called a retraction . Intuitively, a subspace of is a retract of if we can continually collapse (or retract) onto without moving any of the points in . Certain types of retracts, namely deformation retracts, are important in algebraic topology.   Show that every nonempty space can retract to a point.   Show that is a retract of .   Show that every retraction is a quotient map.   Show that if is Hausdorff and is a retract of , then must be a closed subset of .  "
},
{
  "id": "exercise-192",
  "level": "2",
  "url": "sec_quotients_exer.html#exercise-192",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   Let be a surjection from a topological space to a nonempty set . The quotient topology on is the largest topology on such that is continuous.   Let with the Euclidean metric topology and define the relation on as if and are either both rational or both irrational. Then the quotient space is a two point space with the indiscrete topology.   Let be a surjection from a topological space to a nonempty set . The quotient topology on is the largest topology on such that is continuous.   Let with the Euclidean metric topology and define the relation on as if and are either both rational or both irrational. Then the quotient space is a two point space with the indiscrete topology.   If is a topological space, is a set, and is a surjection, then is open in the quotient topology whenever is open in .   If is an equivalence relation on a topological space , then the quotient space is the set of all equivalence classes of with the quotient topology.  "
},
{
  "id": "sec_compact_top_intro",
  "level": "1",
  "url": "sec_compact_top_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Closed and bounded intervals have important properties in calculus. Recall, for example, that every real-valued function that is continuous on a closed interval attains a maximum and minimum value on that interval. The question we want to address in this section is if there is a corresponding characterization for subsets of topological spaces that ensure that continuous real-valued functions with domains in topological spaces attain maximum and minimum values. The property that we will develop is called compactness.  The word compact might bring to mind a notion of smallness, but we need to be careful with the term. We might think that the interval is small, but is homeomorphic to , which is not small. Similarly, we might think that the interval is large, but this interval is homeomorphic to the small interval . As a result, the concept of compactness does not correspond to size, but rather structure, in a way. We will expand on this idea in this section.  Since a topology defines open sets, topological properties are often defined in terms of open sets. Let us consider an example to see if we can tease out some of the details we will need to get a useful notion of compactness. Consider the open interval in . Suppose we write as a union of open balls. For example, let for and . Notice that . Any collection of open sets whose union contains is called an open cover of . Working with a larger number of sets is generally more complicated than working with a smaller number, so it is reasonable to ask if we can reduce the number of sets in our open cover of and still cover . In particular, working with a finite collection of sets is preferable to working with an infinite number of sets (we can exhaustively check all of the possibilities in a finite setting if necessary). Notice that for each , so we can eliminate many of the sets in this cover. However, if we eliminate enough sets so that we are left with only finitely many, then there will be a maximum value of so that remains in our collection. But then will not be in the union of our remaining collection of sets. As a result, we cannot find a finite collection of the whose union contains . Note that there may be some collections of open sets that cover of for which there is a finite subcollection of sets that also cover . For example, if we let , then , and . The main point is that there is at least one collection of open sets that covers for which there is no finite subcollection of sets that covers .  Let's apply the same idea now to the set . Suppose we extend our open cover to be an open cover of the closed interval by including two additional open balls in : and . Now the sets , , and form a finite collection of sets that covers . So even though the interval is larger than in the sense that we can represent in a more efficient (that is finite) way in terms of open sets than we can the interval . This is the basic idea behind compactness.   compact subset   A subset of a topological space is compact if for every set and every family of open sets with such that , there exists a finite subfamily such that .    If is a topological space and is a compact subset of , then we say that is a compact topological space . There is some terminology associated with .   cover  cover open   A cover of a subset of a topological space is a collection of subsets of for in some indexing set so that . In addition, if each set is an open set, then the collection is an open cover for .      A subcover of a cover of a subset of a topological space is a collection for , where is a subset of such that . In addition, if is a finite set, the subcover is a finite subcover of .    So the sets , , and in our previous example form a finite subcover of the open cover .  Using the terminology we have now established, we can restate the definition of compactness in the following way: a subset of a topological space is compact if every open cover of has a finite subcover of .    Determine if the subset of the topological space is compact. Either prove is compact by starting with an arbitrary infinite cover and demonstrating that there is a finite subcover, or find a specific infinite cover and prove that there is no finite subcover.     in with the Euclidean topology. Generalize this example.     in with the Euclidean topology.     in with the Euclidean topology.     in with the Euclidean topology.     in with the finite complement topology.     in with the Euclidean topology.    There are two perspectives by which we can look at compactness. If is a topological space and is a subset of , then tells us what it means for to be compact as a subset of . From this perspective, we use open sets in to make open covers of . We can also consider as a subspace of using the subspace topology . From this perspective we can examine the compactness of using relatively open sets for open covers. tells us that these two perspectives are equivalent, so we will use whatever perspective is appropriate for a given situation.  "
},
{
  "id": "p-2038",
  "level": "2",
  "url": "sec_compact_top_intro.html#p-2038",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open cover "
},
{
  "id": "def_compact",
  "level": "2",
  "url": "sec_compact_top_intro.html#def_compact",
  "type": "Definition",
  "number": "17.1",
  "title": "",
  "body": " compact subset   A subset of a topological space is compact if for every set and every family of open sets with such that , there exists a finite subfamily such that .   "
},
{
  "id": "p-2041",
  "level": "2",
  "url": "sec_compact_top_intro.html#p-2041",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compact topological space "
},
{
  "id": "definition-66",
  "level": "2",
  "url": "sec_compact_top_intro.html#definition-66",
  "type": "Definition",
  "number": "17.2",
  "title": "",
  "body": " cover  cover open   A cover of a subset of a topological space is a collection of subsets of for in some indexing set so that . In addition, if each set is an open set, then the collection is an open cover for .   "
},
{
  "id": "definition-67",
  "level": "2",
  "url": "sec_compact_top_intro.html#definition-67",
  "type": "Definition",
  "number": "17.3",
  "title": "",
  "body": "  A subcover of a cover of a subset of a topological space is a collection for , where is a subset of such that . In addition, if is a finite set, the subcover is a finite subcover of .   "
},
{
  "id": "exploration-16",
  "level": "2",
  "url": "sec_compact_top_intro.html#exploration-16",
  "type": "Preview Activity",
  "number": "17.1",
  "title": "",
  "body": "  Determine if the subset of the topological space is compact. Either prove is compact by starting with an arbitrary infinite cover and demonstrating that there is a finite subcover, or find a specific infinite cover and prove that there is no finite subcover.     in with the Euclidean topology. Generalize this example.     in with the Euclidean topology.     in with the Euclidean topology.     in with the Euclidean topology.     in with the finite complement topology.     in with the Euclidean topology.   "
},
{
  "id": "sec_compact_cont",
  "level": "1",
  "url": "sec_compact_cont.html",
  "type": "Section",
  "number": "",
  "title": "Compactness and Continuity",
  "body": " Compactness and Continuity  In our preview activity we learned about compactness the analog of closed intervals from in topological spaces. Recall that a subset of a topological space is compact if every open cover of has a finite sub-cover. As we will see, the definition of compactness is exactly what we need to ensure results of the type that continuous real-valued functions with domains in topological spaces attain maximum and minimum values on compact sets.  We might expect that compact sets have certain properties, but we must be careful which ones we assume.    Let and give the topology .    Explain why every finite subset of a topological space must be compact.    Find, if possible, a subset of that is compact and open. If no such subset exists, explain why.    If is a compact subset of , must be open? Explain.    Find, if possible, a subset of that is compact and closed. If no such subset exists, explain why.    If is a compact subset of , must be closed? Explain.    The message of is that compactness by itself is not related to closed or open sets. We will see later, though, that in some reasonable circumstances, compact sets and closed sets are related. For the moment, we take a short detour and ask if compactness is a topological property.    Let and be topological spaces, and let be continuous. Assume that is a compact subset of . In this activity we want to determine if must be a compact subset of .    What do we need to show to prove that is a compact subset of ? Where do we start?    If we have an open cover of in , how can we find an open cover for ? Be sure to verify that what you claim is actually an open cover of .    What do we know about any open cover of ?    Complete the proof of the following theorem.    Let and be topological spaces, and let be continuous. If is a compact subset of , then is a compact subset of .      A consequence of is that compactness is a topological property.    Let and be homeomorphic topological spaces. Then a subset of is compact if and only if is compact in .    "
},
{
  "id": "act_compact_clopen",
  "level": "2",
  "url": "sec_compact_cont.html#act_compact_clopen",
  "type": "Activity",
  "number": "17.2",
  "title": "",
  "body": "  Let and give the topology .    Explain why every finite subset of a topological space must be compact.    Find, if possible, a subset of that is compact and open. If no such subset exists, explain why.    If is a compact subset of , must be open? Explain.    Find, if possible, a subset of that is compact and closed. If no such subset exists, explain why.    If is a compact subset of , must be closed? Explain.   "
},
{
  "id": "act_compact_invariant",
  "level": "2",
  "url": "sec_compact_cont.html#act_compact_invariant",
  "type": "Activity",
  "number": "17.3",
  "title": "",
  "body": "  Let and be topological spaces, and let be continuous. Assume that is a compact subset of . In this activity we want to determine if must be a compact subset of .    What do we need to show to prove that is a compact subset of ? Where do we start?    If we have an open cover of in , how can we find an open cover for ? Be sure to verify that what you claim is actually an open cover of .    What do we know about any open cover of ?    Complete the proof of the following theorem.    Let and be topological spaces, and let be continuous. If is a compact subset of , then is a compact subset of .     "
},
{
  "id": "corollary-8",
  "level": "2",
  "url": "sec_compact_cont.html#corollary-8",
  "type": "Corollary",
  "number": "17.5",
  "title": "",
  "body": "  Let and be homeomorphic topological spaces. Then a subset of is compact if and only if is compact in .   "
},
{
  "id": "sec_compact_rn",
  "level": "1",
  "url": "sec_compact_rn.html",
  "type": "Section",
  "number": "",
  "title": "Compact Subsets of <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Compact Subsets of  The metric space is not compact since the open cover has no finite sub-cover. Since we have already shown that is homeomorphic to the topological subspaces , , and for any , we conclude that no open intervals are compact. Similarly, no half-closed intervals are compact. In fact, we will demonstrate in this section that the compact subsets of are exactly the subsets that are closed and bounded. The first step is contained in the next activity.    We have seen that compact sets can be either open or closed. However, in certain situations compact sets must be closed. We investigate that idea in this activity. Let be a compact subset of a Hausdorff topological space . We will examine why must be a closed set.    To prove that is a closed set, we consider the set . What property of will ensure that is closed? How do we prove that has this property?    Let . Assume that is a nonempty set (why can we make this assumption)? For each , why must there exist disjoint open sets and with and ?    Why must there exist a positive integer and elements , , , in such that the sets , , , form an open cover of ?    Now find an open subset of that has as an element. What does this tell us about ?    The result of is summarized in .    If is a compact subset of a Hausdorff topological space, then is closed.     tells us something about compact subsets of . Since every metric space is Hausdorff, we can conclude the following corollary.    If is a compact subset of , then is closed.    To classify the compact subsets of as closed and bounded, we need to discuss what it means for a set in to be bounded. The basic idea is straightforward a subset of is bounded if it doesn't go off to infinity in any direction. In other words, a subset of is bounded if we can construct a box in that is large enough to contain it. Thus, the following definition.   bounded subset of   A subset of is bounded if there exists such that , where .    The set in is called the standard  -dimensional cube of size M . A standard 3-dimensional cube of size is shown in .   A standard 3-cube .    An important fact about standard -cubes is that they are compact subsets of . Compactness is a complicated property it is difficult to prove a result that is true about every open cover. As a result, the proof of is quite technical, but it is a critical step to classifying the compact subsets of .    Let . The standard -dimensional cube of size is a compact subset of for any .    We proceed by contradiction and assume that there is an and a positive real number such that is not compact. So there exists an open cover with in some indexing set of that has no finite sub-cover. Let so that is an -cube with side length . Partition into uniform sub-cubes of side length (a picture for is shown at left in ).   Left : . Middle: . Right: Labeling the corners.        Let be one of these sub-cubes. The collection is an open cover of in the subspace topology. If each of these open covers has a finite sub-cover, then we can take the union of all of the s over all of the finite sub-covers to obtain a finite sub-cover of for . Since our cover for has no finite sub-cover, we conclude that there is one sub-cube, , for which the open cover has no finite sub-cover. Now we repeat the process and partition into uniform sub-cubes of side length . The same argument we just made tells us that there is a sub-cube of for which the open cover has no finite sub-cover (an illustration for the case is shown at middle in ). We proceed inductively to obtain an infinite nested sequence of cubes such that for each , the lengths of the sides of cube are and the open cover of has no finite sub-cover. Now we show that .  For , let . That is, think of the point as a lower corner of the cube and the point as an upper corner of the -cube (a labeling for and from 1 to 3 is shown at right in ). Let . We will show that . Fix . We need to demonstrate that .  For each between 1 and we have because is an upper bound for all of the . The fact that our cubes are nested means that for every and . Since is the least upper bound of all of the , property shows that for every . Thus, and so . This shows that for every . Consequently, and is not empty. (The fact that the side lengths of our cubes are converging to 0 implies that , but we only need to know that is not empty for our proof.)  Since is a cover for , there must exist an such that . The set is open, so there exists such that . The maximum distance between points in is the distance between the corner points and , where each length is . The distance formula tells us that this maximum distance between points in is .  Now choose such that . Then if we have and . So . But . So the collection is a sub-cover of for . But this contradicts the fact this open cover has no finite sub-cover. The assumption that led us to this contradiction was that was not compact, so we conclude that the standard -dimensional cube of size is a compact subset of for any .    One consequence of is that any closed interval in is a compact set. But we can say even more that the compact subsets of are the closed and bounded subsets. This will require one more intermediate result about closed subsets of compact topological spaces.    Let be a compact topological space and a closed subset of . In this activity we will prove that is compact.    What does it take to prove that is compact?    Use an open cover for and the fact that is closed to make an open cover for .    Use the fact that is compact to complete the proof of the following theorem.    Let be a compact topological space. Then any closed subset of is compact.      Now we can prove a major result, that the compact subsets of are the closed and bounded subsets. This result is important enough that it is given a name.   The Heine-Borel Theorem   A subset of is compact if and only if is closed and bounded.    Let be a subset of . Assume that is closed and bounded. Since is bounded, there is a positive number such that . shows that is compact, and then shows that is compact.  For the converse, assume that is a compact subset of . We must show that is closed and bounded. Now is a metric space, and so Hausdorff. then shows that is closed. To conclude our proof, we need to demonstrate that is bounded. For each , let .  That is, is the open -cube in . Next let for each . Since , it follows that is an open cover of . The fact that is compact means that there is a finite collection , , , of sets in that cover . Let . Then for each , and so . Thus, is bounded. This completes the proof that if is compact in , then is closed and bounded.    You might wonder whether the Heine-Borel Theorem is true in any metric space.   A subset of a metric space is bounded if there exists a real number such that for all . (This is equivalent to our definition of a bounded subset of given earlier, but works in any metric space.) Explain why as a subset of , where is the discrete metric, is closed and bounded but not compact.   "
},
{
  "id": "act_metric_compact_closed",
  "level": "2",
  "url": "sec_compact_rn.html#act_metric_compact_closed",
  "type": "Activity",
  "number": "17.4",
  "title": "",
  "body": "  We have seen that compact sets can be either open or closed. However, in certain situations compact sets must be closed. We investigate that idea in this activity. Let be a compact subset of a Hausdorff topological space . We will examine why must be a closed set.    To prove that is a closed set, we consider the set . What property of will ensure that is closed? How do we prove that has this property?    Let . Assume that is a nonempty set (why can we make this assumption)? For each , why must there exist disjoint open sets and with and ?    Why must there exist a positive integer and elements , , , in such that the sets , , , form an open cover of ?    Now find an open subset of that has as an element. What does this tell us about ?   "
},
{
  "id": "thm_metric_compact_closed",
  "level": "2",
  "url": "sec_compact_rn.html#thm_metric_compact_closed",
  "type": "Theorem",
  "number": "17.6",
  "title": "",
  "body": "  If is a compact subset of a Hausdorff topological space, then is closed.   "
},
{
  "id": "corollary-9",
  "level": "2",
  "url": "sec_compact_rn.html#corollary-9",
  "type": "Corollary",
  "number": "17.7",
  "title": "",
  "body": "  If is a compact subset of , then is closed.   "
},
{
  "id": "def_n_cube",
  "level": "2",
  "url": "sec_compact_rn.html#def_n_cube",
  "type": "Definition",
  "number": "17.8",
  "title": "",
  "body": " bounded subset of   A subset of is bounded if there exists such that , where .   "
},
{
  "id": "p-2083",
  "level": "2",
  "url": "sec_compact_rn.html#p-2083",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard -dimensional cube of size M "
},
{
  "id": "F_M_cube",
  "level": "2",
  "url": "sec_compact_rn.html#F_M_cube",
  "type": "Figure",
  "number": "17.9",
  "title": "",
  "body": " A standard 3-cube .   "
},
{
  "id": "thm_Compact_cubes",
  "level": "2",
  "url": "sec_compact_rn.html#thm_Compact_cubes",
  "type": "Theorem",
  "number": "17.10",
  "title": "",
  "body": "  Let . The standard -dimensional cube of size is a compact subset of for any .    We proceed by contradiction and assume that there is an and a positive real number such that is not compact. So there exists an open cover with in some indexing set of that has no finite sub-cover. Let so that is an -cube with side length . Partition into uniform sub-cubes of side length (a picture for is shown at left in ).   Left : . Middle: . Right: Labeling the corners.        Let be one of these sub-cubes. The collection is an open cover of in the subspace topology. If each of these open covers has a finite sub-cover, then we can take the union of all of the s over all of the finite sub-covers to obtain a finite sub-cover of for . Since our cover for has no finite sub-cover, we conclude that there is one sub-cube, , for which the open cover has no finite sub-cover. Now we repeat the process and partition into uniform sub-cubes of side length . The same argument we just made tells us that there is a sub-cube of for which the open cover has no finite sub-cover (an illustration for the case is shown at middle in ). We proceed inductively to obtain an infinite nested sequence of cubes such that for each , the lengths of the sides of cube are and the open cover of has no finite sub-cover. Now we show that .  For , let . That is, think of the point as a lower corner of the cube and the point as an upper corner of the -cube (a labeling for and from 1 to 3 is shown at right in ). Let . We will show that . Fix . We need to demonstrate that .  For each between 1 and we have because is an upper bound for all of the . The fact that our cubes are nested means that for every and . Since is the least upper bound of all of the , property shows that for every . Thus, and so . This shows that for every . Consequently, and is not empty. (The fact that the side lengths of our cubes are converging to 0 implies that , but we only need to know that is not empty for our proof.)  Since is a cover for , there must exist an such that . The set is open, so there exists such that . The maximum distance between points in is the distance between the corner points and , where each length is . The distance formula tells us that this maximum distance between points in is .  Now choose such that . Then if we have and . So . But . So the collection is a sub-cover of for . But this contradicts the fact this open cover has no finite sub-cover. The assumption that led us to this contradiction was that was not compact, so we conclude that the standard -dimensional cube of size is a compact subset of for any .   "
},
{
  "id": "activity-85",
  "level": "2",
  "url": "sec_compact_rn.html#activity-85",
  "type": "Activity",
  "number": "17.5",
  "title": "",
  "body": "  Let be a compact topological space and a closed subset of . In this activity we will prove that is compact.    What does it take to prove that is compact?    Use an open cover for and the fact that is closed to make an open cover for .    Use the fact that is compact to complete the proof of the following theorem.    Let be a compact topological space. Then any closed subset of is compact.     "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "sec_compact_rn.html#theorem-51",
  "type": "Theorem",
  "number": "17.13",
  "title": "The Heine-Borel Theorem.",
  "body": " The Heine-Borel Theorem   A subset of is compact if and only if is closed and bounded.    Let be a subset of . Assume that is closed and bounded. Since is bounded, there is a positive number such that . shows that is compact, and then shows that is compact.  For the converse, assume that is a compact subset of . We must show that is closed and bounded. Now is a metric space, and so Hausdorff. then shows that is closed. To conclude our proof, we need to demonstrate that is bounded. For each , let .  That is, is the open -cube in . Next let for each . Since , it follows that is an open cover of . The fact that is compact means that there is a finite collection , , , of sets in that cover . Let . Then for each , and so . Thus, is bounded. This completes the proof that if is compact in , then is closed and bounded.   "
},
{
  "id": "activity-86",
  "level": "2",
  "url": "sec_compact_rn.html#activity-86",
  "type": "Activity",
  "number": "17.6",
  "title": "",
  "body": " A subset of a metric space is bounded if there exists a real number such that for all . (This is equivalent to our definition of a bounded subset of given earlier, but works in any metric space.) Explain why as a subset of , where is the discrete metric, is closed and bounded but not compact.  "
},
{
  "id": "sec_compact_app",
  "level": "1",
  "url": "sec_compact_app.html",
  "type": "Section",
  "number": "",
  "title": "An Application of Compactness",
  "body": " An Application of Compactness  As mentioned at the beginning of this section, compactness is the quality we need to ensure that continuous functions from topological spaces to attain their maximum and minimum values.    In this activity we prove the following theorem.    A continuous function from a compact topological space to the real numbers assumes a maximum and minimum value.      Let be a compact topological space and a continuous function. What does the continuity of tell us about in ?    Why can we conclude that the set has a least upper bound ? Why must be an element of ?    Complete the proof of .    "
},
{
  "id": "activity-87",
  "level": "2",
  "url": "sec_compact_app.html#activity-87",
  "type": "Activity",
  "number": "17.7",
  "title": "",
  "body": "  In this activity we prove the following theorem.    A continuous function from a compact topological space to the real numbers assumes a maximum and minimum value.      Let be a compact topological space and a continuous function. What does the continuity of tell us about in ?    Why can we conclude that the set has a least upper bound ? Why must be an element of ?    Complete the proof of .   "
},
{
  "id": "sec_compact_top_summ",
  "level": "1",
  "url": "sec_compact_top_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A cover of a subset of a topological space is any collection of subsets of whose union contains . An open cover is a cover consisting of open sets.    A subcover of a cover of a set is a subset of the cover such that the union of the sets in the subcover also contains .    A subset of a topological space is compact if every open cover of has a finite subcover.    A continuous function from a compact topological space to the real numbers must attain a maximum and minimum value.    The Heine-Borel Theorem states that the compact subsets of are exactly the subsets that are closed and bounded.     "
},
{
  "id": "sec_compact_top_exer",
  "level": "1",
  "url": "sec_compact_top_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": " Exercises   Determine the compact subsets of a topological space with the indiscrete topology.   Determine the compact subsets of a topological space with the indiscrete topology.    Recall from that if and are two topologies on a set such that , then is said to be a coarser (or weaker ) topology than , or is a finer (or stronger ) topology than . In this exercise we explore the question of whether compactness is a property that is passed from weaker to stronger topologies or from stronger to weaker. Let and be two topologies on a set . If , what does compactness under or imply, if anything, about compactness under the other topology? Justify your answers.    Let be the set of even integers, and let . That is, is the collection of all subsets of along with .   Prove that is a topology on .   Find all compact subsets of . Verify your answer.   Prove or disprove: If and are compact subsets of a topological space , then is also a compact subset of .    Let be a topological space   Prove that the union of any finite number of compact subsets of is a compact subset of .   In we should have seen that the intersection of compact sets is not necessarily compact. If is Hausdorff, prove that the intersection of any finite number of compact subsets of is a compact subset of .    Consider with the digital line topology (see ). Determine the compact subsets of .    For each , let be the set of integers in the interval (see .)   Show that is a basis for a topology on    Is the subset compact in this topology?   Determine all of the compact subsets of .    Let and be topological spaces, and let be a function.   Suppose that is a continuous function, and that is compact and is Hausdorff. Prove that if is a closed subset of , then is a closed subset of . (Thus, is a closed function.)   Use Activity 17.3, Activity 17.4, and Theorem 17.6.   Suppose that is a continuous bijection. Prove that if is compact and is Hausdorff, then is a homeomorphism.   Give an example where is a continuous bijection and is compact, but is not a homeomorphism.   Give an example where is a continuous bijection and is Hausdorff, but is not a homeomorphism.    The Either-Or topology on the interval has as its open sets all subsets of that contain and any subset of that doesn't contain .   Describe the non-trivial closed subsets of .   Is a Hausdorff topological space? Explain.   Is compact? Prove your answer.   Are there any subsets of that are not compact? Justify your answer.    Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by .   Show that is not compact.   How is the -topology related to the Euclidean topology?   Show that any subset of that contains is not a compact subset of . In particular, even though is a closed and bounded subset of in , we note that is not compact.   Consider the sets for .    Let be a topological space.   Prove that if is Hausdorff and is a compact subset of , then for each there exist disjoint open sets and such that and .   Prove that if is a compact Hausdorff space, then is normal.    Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the compact subsets of when    has the particular point topology     has the excluded point topology .    In this exercise we encounter a non-Hausdorff topological space in which single points sets are closed, and in which compact subsets need not be closed. Consider the set with the finite complement topology .   Show that every single point set is closed.   Explain why is not a Hausdorff space.   Let be an open set in that contains and an open set in that contains . Explain why it cannot be the case that and are disjoint that is, must be non-empty.   Show that the subset of even integers is a compact subset of that is not closed. Verify your result.    Let be a Hausdorff topological space.   Let and let be a compact subset of . Prove that there exist disjoint open subsets and of such that and .   Let and be disjoint compact subsets of . Prove that there exist disjoint open sets and such that and .    Let be a topological space and let be a subset of . Let be the subspace topology on . Prove that is a compact subset of if and only if is a compact topological space.    Let be a topological space. A family of subsets of is said to have the finite intersection property if for each finite subset of , . Prove that is compact if and only if for each family of closed subsets of that has the finite intersection property, we have .    Even though is not a compact space, if , then and so every point in is contained in a compact subset of . So if we view from the perspective of a point in , the space looks compact around that point. This is the idea of local compactness. Locally compact spaces are important in the general topology of function spaces.   locally compact   A topological space is locally compact if for each there is an open set such that and is compact.     Explain why is locally compact for each .   Show that any compact space is locally compact.   Consider the Sorgenfrey line from . Recall that the Sorgenfrey line is the space with a basis for its topology. Show that the Sorgenfrey line is Hausdorff but not locally compact.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If and are compact topological spaces and is a continuous bijection, then is a homeomorphism.   If is a compact topological space, then any closed subspace of is compact.   If is a Hausdorff space, is a compact space, and is a continuous and bijective function, then is a homeomorphism.   If is a compact space, is a Hausdorff space, and is a continuous bijection, then is a homeomorphism.   Let be a closed subset of a metric space with the metric topology. Then is compact.   If is a compact subset of a topological space , then is a closed subset of .   Let be a topological space with the discrete topology. Then is compact if and only if is finite.   "
},
{
  "id": "exercise-193",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-193",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine the compact subsets of a topological space with the indiscrete topology.   Determine the compact subsets of a topological space with the indiscrete topology.  "
},
{
  "id": "exercise-194",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-194",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Recall from that if and are two topologies on a set such that , then is said to be a coarser (or weaker ) topology than , or is a finer (or stronger ) topology than . In this exercise we explore the question of whether compactness is a property that is passed from weaker to stronger topologies or from stronger to weaker. Let and be two topologies on a set . If , what does compactness under or imply, if anything, about compactness under the other topology? Justify your answers.  "
},
{
  "id": "ex_intersection_not_compact",
  "level": "2",
  "url": "sec_compact_top_exer.html#ex_intersection_not_compact",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be the set of even integers, and let . That is, is the collection of all subsets of along with .   Prove that is a topology on .   Find all compact subsets of . Verify your answer.   Prove or disprove: If and are compact subsets of a topological space , then is also a compact subset of .  "
},
{
  "id": "exercise-196",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-196",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be a topological space   Prove that the union of any finite number of compact subsets of is a compact subset of .   In we should have seen that the intersection of compact sets is not necessarily compact. If is Hausdorff, prove that the intersection of any finite number of compact subsets of is a compact subset of .  "
},
{
  "id": "exercise-197",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-197",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Consider with the digital line topology (see ). Determine the compact subsets of .  "
},
{
  "id": "exercise-198",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-198",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " For each , let be the set of integers in the interval (see .)   Show that is a basis for a topology on    Is the subset compact in this topology?   Determine all of the compact subsets of .  "
},
{
  "id": "exercise-199",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-199",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let and be topological spaces, and let be a function.   Suppose that is a continuous function, and that is compact and is Hausdorff. Prove that if is a closed subset of , then is a closed subset of . (Thus, is a closed function.)   Use Activity 17.3, Activity 17.4, and Theorem 17.6.   Suppose that is a continuous bijection. Prove that if is compact and is Hausdorff, then is a homeomorphism.   Give an example where is a continuous bijection and is compact, but is not a homeomorphism.   Give an example where is a continuous bijection and is Hausdorff, but is not a homeomorphism.  "
},
{
  "id": "exercise-200",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-200",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " The Either-Or topology on the interval has as its open sets all subsets of that contain and any subset of that doesn't contain .   Describe the non-trivial closed subsets of .   Is a Hausdorff topological space? Explain.   Is compact? Prove your answer.   Are there any subsets of that are not compact? Justify your answer.  "
},
{
  "id": "ex_K_topology_compact",
  "level": "2",
  "url": "sec_compact_top_exer.html#ex_K_topology_compact",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by .   Show that is not compact.   How is the -topology related to the Euclidean topology?   Show that any subset of that contains is not a compact subset of . In particular, even though is a closed and bounded subset of in , we note that is not compact.   Consider the sets for .  "
},
{
  "id": "ex_Compact_normal",
  "level": "2",
  "url": "sec_compact_top_exer.html#ex_Compact_normal",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let be a topological space.   Prove that if is Hausdorff and is a compact subset of , then for each there exist disjoint open sets and such that and .   Prove that if is a compact Hausdorff space, then is normal.  "
},
{
  "id": "exercise-203",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-203",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the compact subsets of when    has the particular point topology     has the excluded point topology .  "
},
{
  "id": "exercise-204",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-204",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " In this exercise we encounter a non-Hausdorff topological space in which single points sets are closed, and in which compact subsets need not be closed. Consider the set with the finite complement topology .   Show that every single point set is closed.   Explain why is not a Hausdorff space.   Let be an open set in that contains and an open set in that contains . Explain why it cannot be the case that and are disjoint that is, must be non-empty.   Show that the subset of even integers is a compact subset of that is not closed. Verify your result.  "
},
{
  "id": "exercise-205",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-205",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let be a Hausdorff topological space.   Let and let be a compact subset of . Prove that there exist disjoint open subsets and of such that and .   Let and be disjoint compact subsets of . Prove that there exist disjoint open sets and such that and .  "
},
{
  "id": "ex_subspace_compact",
  "level": "2",
  "url": "sec_compact_top_exer.html#ex_subspace_compact",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Let be a topological space and let be a subset of . Let be the subspace topology on . Prove that is a compact subset of if and only if is a compact topological space.  "
},
{
  "id": "exercise-207",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-207",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Let be a topological space. A family of subsets of is said to have the finite intersection property if for each finite subset of , . Prove that is compact if and only if for each family of closed subsets of that has the finite intersection property, we have .  "
},
{
  "id": "exercise-208",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-208",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Even though is not a compact space, if , then and so every point in is contained in a compact subset of . So if we view from the perspective of a point in , the space looks compact around that point. This is the idea of local compactness. Locally compact spaces are important in the general topology of function spaces.   locally compact   A topological space is locally compact if for each there is an open set such that and is compact.     Explain why is locally compact for each .   Show that any compact space is locally compact.   Consider the Sorgenfrey line from . Recall that the Sorgenfrey line is the space with a basis for its topology. Show that the Sorgenfrey line is Hausdorff but not locally compact.  "
},
{
  "id": "exercise-209",
  "level": "2",
  "url": "sec_compact_top_exer.html#exercise-209",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If and are compact topological spaces and is a continuous bijection, then is a homeomorphism.   If is a compact topological space, then any closed subspace of is compact.   If is a Hausdorff space, is a compact space, and is a continuous and bijective function, then is a homeomorphism.   If is a compact space, is a Hausdorff space, and is a continuous bijection, then is a homeomorphism.   Let be a closed subset of a metric space with the metric topology. Then is compact.   If is a compact subset of a topological space , then is a closed subset of .   Let be a topological space with the discrete topology. Then is compact if and only if is finite.  "
},
{
  "id": "sec_fractals",
  "level": "1",
  "url": "sec_fractals.html",
  "type": "Section",
  "number": "",
  "title": "An Application of Compactness: Fractals",
  "body": " An Application of Compactness: Fractals  Introduced by Felix Hausdorff in the early 20th century as a way to measure the distance between sets, the Hausdorff metric (also called the Pompeiu-Hausdorff metric) has since been widely studied and has many applications. For example, the United States military has used the Hausdorff distance in target recognition procedures. In addition, the Hausdorff metric has been used in image matching and visual recognition by robots, medicine, image analysis, and astronomy.  The basic idea in these applications is that we need a way to compare two shapes. For example, if a manufacturer needs to mill a specific product based on a template, there is usually some tolerance that is allowed. So the manufacturer needs a way to compare the milled parts to the template to determine if the tolerance has been met or exceeded.  The Hausdorff metric is also familiar to fractal aficionados for describing the convergence of sequences of compact sets to their attractors in iterated function systems. The variety of applications of this metric make it one that is worth studying.  To define the Hausdorff metric, we begin with the distance from a point in a metric space to a subset of as .  Since images will be represented as compact sets, we restrict ourselves to compact subsets of a metric space. In this case the infimum becomes a minimum and we have .  We now extend that idea to define the distance from one subset of to another. Let and be nonempty compact subsets of . To find the distance from the set to the set , it seems reasonable to consider how far each point in is from the set . Then the distance from to should measure how far we have to travel to get from any point in to .    Let be a metric space and let and be nonempty compact subsets of . Then distance from to is .    Note: since and are compact, is guaranteed to exist.    A problem with as in is that is not symmetric. Find examples of compact subsets and of with the Euclidean metric such that .    Even though the function in is not a metric, we can define the Hausdorff distance in terms of as follows.   metric Hausdorff   Let be a metric space and and nonempty compact subsets of . Then Hausdorff distance between and is .    Let be the circle in centered at the origin with radius 1, let be the inscribed square, and let as shown in .   Sets , , and .    Determine , , and , and verify that .    It may be surprising that as in is actually a metric, but it is. The underlying space is the collection of nonempty compact subsets of which we denote at . Prove the following theorem.    Let be a metric space. The Hausdorff distance function is a metric on .      One fun application of the Hausdorff metric is in fractal geometry. You may be familiar with objects like the Sierpinski triangle or the Koch curve. These objects are limits of sequences of sets in . We illustrate with the Sierpinski triangle. Start with three points , , and that form the vertices of an equilateral triangle . For =1,2, or 3, let . For =1,2, or 3, we define by . Then , when applied to , contracts by a factor of 2 and then translates the image of so that the vertex of and the th vertex of the image of coincide. Such a map is called a contraction mapping with contraction factor equal to . Define to be . Then is the set of all points half way between any point in and , or is a triangle half the size of the original translated to the vertex of the original. Let . Both and are shown in . We can continue this procedure replacing with . In other words, for = 1, 2, and 3, let . Then let . A picture of is shown in . We can continue this procedure, each time replacing with . A picture of is shown in .   for equal to 0, 1, 2, and 8.                     To continue this process, we need to take a limit. But the are sets in , so the limit is taken with respect to the Hausdorff metric.   Assume that the length of a side of is . Determine . Then find for an arbitrary positive integer .   The Sierpinski triangle will exist if the sequence converges to a set (which would be the Sierpinski triangle). The question of convergence is not a trivial one.   Consider the sequence , where for . Note that each is a rational number. Explain why the terms in this sequence get arbitrarily close together, but the sequence does not converge in . Explain why the sequence converges in .  Cauchy sequence  A sequence in a metric space is a Cauchy sequence if given there exists such that whenever . Every convergent sequence is a Cauchy sequence. A metric space is said to be complete metric space complete if every Cauchy sequence in converges to an element in . For example, is complete while is not. Although we will not prove it, the metric space is complete. Show that the sequence is a Cauchy sequence in . The limit of this sequence is the famous Sierpinski triangle. The picture of in is a close approximation of the Sierpinski triangle.    "
},
{
  "id": "p-2184",
  "level": "2",
  "url": "sec_fractals.html#p-2184",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "any "
},
{
  "id": "def_AtoB",
  "level": "2",
  "url": "sec_fractals.html#def_AtoB",
  "type": "Definition",
  "number": "17.16",
  "title": "",
  "body": "  Let be a metric space and let and be nonempty compact subsets of . Then distance from to is .   "
},
{
  "id": "activity-88",
  "level": "2",
  "url": "sec_fractals.html#activity-88",
  "type": "Activity",
  "number": "17.8",
  "title": "",
  "body": "  A problem with as in is that is not symmetric. Find examples of compact subsets and of with the Euclidean metric such that .    Even though the function in is not a metric, we can define the Hausdorff distance in terms of as follows.   metric Hausdorff   Let be a metric space and and nonempty compact subsets of . Then Hausdorff distance between and is .    Let be the circle in centered at the origin with radius 1, let be the inscribed square, and let as shown in .   Sets , , and .    Determine , , and , and verify that .    It may be surprising that as in is actually a metric, but it is. The underlying space is the collection of nonempty compact subsets of which we denote at . Prove the following theorem.    Let be a metric space. The Hausdorff distance function is a metric on .      One fun application of the Hausdorff metric is in fractal geometry. You may be familiar with objects like the Sierpinski triangle or the Koch curve. These objects are limits of sequences of sets in . We illustrate with the Sierpinski triangle. Start with three points , , and that form the vertices of an equilateral triangle . For =1,2, or 3, let . For =1,2, or 3, we define by . Then , when applied to , contracts by a factor of 2 and then translates the image of so that the vertex of and the th vertex of the image of coincide. Such a map is called a contraction mapping with contraction factor equal to . Define to be . Then is the set of all points half way between any point in and , or is a triangle half the size of the original translated to the vertex of the original. Let . Both and are shown in . We can continue this procedure replacing with . In other words, for = 1, 2, and 3, let . Then let . A picture of is shown in . We can continue this procedure, each time replacing with . A picture of is shown in .   for equal to 0, 1, 2, and 8.                     To continue this process, we need to take a limit. But the are sets in , so the limit is taken with respect to the Hausdorff metric.   Assume that the length of a side of is . Determine . Then find for an arbitrary positive integer .   The Sierpinski triangle will exist if the sequence converges to a set (which would be the Sierpinski triangle). The question of convergence is not a trivial one.   Consider the sequence , where for . Note that each is a rational number. Explain why the terms in this sequence get arbitrarily close together, but the sequence does not converge in . Explain why the sequence converges in .  Cauchy sequence  A sequence in a metric space is a Cauchy sequence if given there exists such that whenever . Every convergent sequence is a Cauchy sequence. A metric space is said to be complete metric space complete if every Cauchy sequence in converges to an element in . For example, is complete while is not. Although we will not prove it, the metric space is complete. Show that the sequence is a Cauchy sequence in . The limit of this sequence is the famous Sierpinski triangle. The picture of in is a close approximation of the Sierpinski triangle.   "
},
{
  "id": "sec_connect_top_intro",
  "level": "1",
  "url": "sec_connect_top_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  The term connected should bring up images of something that is one piece, not separated. There is more than one way we can interpret the notion of connectedness in topological spaces. For example, we might consider a topological space to be connected if we can't separate it into disjoint pieces in any non-trivial way. As another possibility, we might consider a topological space to be connected if there is always a path from one point in the spaced to another, provided we define what path means. These are different notions of connectedness, and we focus on the first notion in this section.  Connectedness is an important property, and one that we encounter in the calculus. For example, we will see in this section that the Intermediate Value Theorem relies on connected subsets of . To define a connected set, we will need to have a way to understand when and how a set can be separated into different pieces. Since a topology is defined by open sets, when we want to separate objects we will do so with open sets. This is similar to the idea behind Hausdorff spaces, except that we now want to know if a set can be separated in some way rather than separating points.  As an example to motivate the definition, consider the sets and in with the Euclidean topology. Notice that we can write as the union of two disjoint open sets and . So we shouldn't think of as being connected. However, if we attempt to write as a union of two subsets, say and , it is impossible for both of these subsets to be open and disjoint. So is a set we should consider to be connected. This is the notion of connectedness that we wish to investigate.   connected space   A topological space is connected if cannot be written as the union of two disjoint, nonempty, open subsets. A subset of a topological space topological space is connected if is connected in the subspace topology.    If a set is not connected, we say that is disconnected. If is a disconnected topological space, then there exist disjoint nonempty open sets and such that .    Can the subset of the topological space be written as the union of two disjoint nonempty relatively open sets?    The set in with and .    The set in with and .    The set with and .    The set in with the discrete topology. Generalize your findings.    The set in with the indiscrete topology. Generalize your findings.    The set in with the finite complement topology. Generalize your findings.    The set in with the subspace metric topology from .    The set in with open sets .    "
},
{
  "id": "definition-72",
  "level": "2",
  "url": "sec_connect_top_intro.html#definition-72",
  "type": "Definition",
  "number": "18.1",
  "title": "",
  "body": " connected space   A topological space is connected if cannot be written as the union of two disjoint, nonempty, open subsets. A subset of a topological space topological space is connected if is connected in the subspace topology.   "
},
{
  "id": "exploration-17",
  "level": "2",
  "url": "sec_connect_top_intro.html#exploration-17",
  "type": "Preview Activity",
  "number": "18.1",
  "title": "",
  "body": "  Can the subset of the topological space be written as the union of two disjoint nonempty relatively open sets?    The set in with and .    The set in with and .    The set with and .    The set in with the discrete topology. Generalize your findings.    The set in with the indiscrete topology. Generalize your findings.    The set in with the finite complement topology. Generalize your findings.    The set in with the subspace metric topology from .    The set in with open sets .   "
},
{
  "id": "sec_connect_sets",
  "level": "1",
  "url": "sec_connect_sets.html",
  "type": "Section",
  "number": "",
  "title": "Connected Sets",
  "body": " Connected Sets  As we learned in our preview activity, connected sets are those sets that cannot be separated into a union of disjoint open sets. Another characterization of connectedness is established in the next activity.    Let be a topological space.    Assume that is a connected space, and let be a subset of that is both open and closed. What happens if we combine and ? What does the fact that is connected tell us about ?    Now assume that the only subsets of that are both open and closed are and . Must it follow that is connected? Prove your assertion.    Summarize the result of this activity into a theorem of the form A topological space is connected if and only if ... .    A standard example of a connected topological space is the metric space .    The metric space is a connected topological space.    We proceed by contradiction and assume that there are nonempty open sets and such that and . Let and . Since , we know that . Without loss of generality we can assume . Let and let . The set is bounded below by , so exists. Since it must be the case that or .  Suppose . The fact that is an open set implies that there exists such that . But then and so for every . This means that for every , contradicting the fact that is the greatest lower bound. We conclude that .  It follows that . Since , we know that . The fact that is an open set tells us that there exists such that . We can choose to ensure that . Since , the interval is a subset of , and so is not a lower bound for .  Each possibility leads to a contradiction, so we conclude that the sets and cannot exist. Therefore, is a connected topological space.    As you might expect, connectedness is a topological property.    Let and be topological spaces, and let be a continuous function. Assume that is a connected subset of . Our goal is to prove that is a connected subspace of .  Let and define by . Then is a continuous function that maps onto . So we consider instead of .    Assume to the contrary that is not connected. What do we then assume about ?    Suppose that and are disjoint nonempty open sets in such that . Let and .   Explain why and are open sets in .   Show that . (Hint: .)   Show and are nonempty sets.   Use the fact that is a surjection.   Now show that . (Hint: .)    Explain how we have proved the following.    Let and be topological spaces, and let be a continuous function. If is connected, then is connected.      The fact that connectedness is preserved by continuous functions means that connectedness is a property that is shared by any homeomorphic topological spaces, as the next corollary indicates.    Let and be homeomorphic topological spaces. Then is connected if and only if is connected.    Let and be topological spaces and let be a homeomorphism. Assume that is connected. Since is continuous, shows that is connected. The reverse implication follows from the fact that is a homeomorphism.    Recall that is homeomorphic to the topological subspaces , , and for any . The fact that is connected ( ) allows us to conclude that all open intervals are connected. It would seem natural that all closed (or half-closed) intervals should also be connected. We address this question next. Before we get to this result, we consider an alternate formulation of connected subsets.  Consider the set in . Let and in . Note that and , and so and are open sets in that separate the set into two disjoint pieces. We know that and are open in and with . So to show that a subset of a topological space is not connected, this example suggests that it suffices to find nonempty open sets and in with and . Note that it is not necessary to have . That this works in general is the result of the next theorem.    Let be a topological space. A subset of is disconnected if and only if there exist open sets and in with    ,     ,     , and     .       Let be a topological space, and let be a subset of . We first assume that is disconnected and show that there are open sets and in that satisfy the given conditions. Since is disconnected, there are nonempty open sets and in such that and . Since and are open in , there exist open sets and in so that and . Now , and so . By construction, and are not empty. Finally, .  So we have found sets and that satisfy the conditions of our theorem.  The proof of the reverse implication is left to the next activity.     Let be a topological space, and let be a subset of . Assume that there exist open sets and in with , , , and . Prove that is disconnected.   The conditions in provide a convenient way to show that a set is disconnected, and so any pair of sets and that satisfy the conditions of is given a special name.   separation   Let be a topological space, and let be a subset of . A separation of is a pair of nonempty open subsets and of such that    ,     ,     , and     .       If is a disconnected topological space, then a separation of is a pair , of disjoint nonempty open sets such that .  "
},
{
  "id": "activity-89",
  "level": "2",
  "url": "sec_connect_sets.html#activity-89",
  "type": "Activity",
  "number": "18.2",
  "title": "",
  "body": "  Let be a topological space.    Assume that is a connected space, and let be a subset of that is both open and closed. What happens if we combine and ? What does the fact that is connected tell us about ?    Now assume that the only subsets of that are both open and closed are and . Must it follow that is connected? Prove your assertion.    Summarize the result of this activity into a theorem of the form A topological space is connected if and only if ... .   "
},
{
  "id": "thm_R_connected",
  "level": "2",
  "url": "sec_connect_sets.html#thm_R_connected",
  "type": "Theorem",
  "number": "18.2",
  "title": "",
  "body": "  The metric space is a connected topological space.    We proceed by contradiction and assume that there are nonempty open sets and such that and . Let and . Since , we know that . Without loss of generality we can assume . Let and let . The set is bounded below by , so exists. Since it must be the case that or .  Suppose . The fact that is an open set implies that there exists such that . But then and so for every . This means that for every , contradicting the fact that is the greatest lower bound. We conclude that .  It follows that . Since , we know that . The fact that is an open set tells us that there exists such that . We can choose to ensure that . Since , the interval is a subset of , and so is not a lower bound for .  Each possibility leads to a contradiction, so we conclude that the sets and cannot exist. Therefore, is a connected topological space.   "
},
{
  "id": "activity-90",
  "level": "2",
  "url": "sec_connect_sets.html#activity-90",
  "type": "Activity",
  "number": "18.3",
  "title": "",
  "body": "  Let and be topological spaces, and let be a continuous function. Assume that is a connected subset of . Our goal is to prove that is a connected subspace of .  Let and define by . Then is a continuous function that maps onto . So we consider instead of .    Assume to the contrary that is not connected. What do we then assume about ?    Suppose that and are disjoint nonempty open sets in such that . Let and .   Explain why and are open sets in .   Show that . (Hint: .)   Show and are nonempty sets.   Use the fact that is a surjection.   Now show that . (Hint: .)    Explain how we have proved the following.    Let and be topological spaces, and let be a continuous function. If is connected, then is connected.     "
},
{
  "id": "corollary-10",
  "level": "2",
  "url": "sec_connect_sets.html#corollary-10",
  "type": "Corollary",
  "number": "18.4",
  "title": "",
  "body": "  Let and be homeomorphic topological spaces. Then is connected if and only if is connected.    Let and be topological spaces and let be a homeomorphism. Assume that is connected. Since is continuous, shows that is connected. The reverse implication follows from the fact that is a homeomorphism.   "
},
{
  "id": "thm_conn_subset",
  "level": "2",
  "url": "sec_connect_sets.html#thm_conn_subset",
  "type": "Theorem",
  "number": "18.5",
  "title": "",
  "body": "  Let be a topological space. A subset of is disconnected if and only if there exist open sets and in with    ,     ,     , and     .       Let be a topological space, and let be a subset of . We first assume that is disconnected and show that there are open sets and in that satisfy the given conditions. Since is disconnected, there are nonempty open sets and in such that and . Since and are open in , there exist open sets and in so that and . Now , and so . By construction, and are not empty. Finally, .  So we have found sets and that satisfy the conditions of our theorem.  The proof of the reverse implication is left to the next activity.   "
},
{
  "id": "activity-91",
  "level": "2",
  "url": "sec_connect_sets.html#activity-91",
  "type": "Activity",
  "number": "18.4",
  "title": "",
  "body": " Let be a topological space, and let be a subset of . Assume that there exist open sets and in with , , , and . Prove that is disconnected.  "
},
{
  "id": "definition-73",
  "level": "2",
  "url": "sec_connect_sets.html#definition-73",
  "type": "Definition",
  "number": "18.6",
  "title": "",
  "body": " separation   Let be a topological space, and let be a subset of . A separation of is a pair of nonempty open subsets and of such that    ,     ,     , and     .      "
},
{
  "id": "sec_connect_subset_rn",
  "level": "1",
  "url": "sec_connect_subset_rn.html",
  "type": "Section",
  "number": "",
  "title": "Connected Subsets of <span class=\"process-math\">\\(\\R\\)<\/span>",
  "body": " Connected Subsets of  With in hand, we are just about ready to show that any interval in is connected. Let us return for a moment to our example of in . It is not difficult to see that if and are a separation of , then the subset must be entirely contained in either or in . The reason for this is that is a connected subset of . This result is true in general.    Let be a topological space, and let be a subset of . Assume that and form a separation of . Let be a connected subset of . In this activity we want to prove that or .    Use the fact that and form a separation to to wxplain why and .    Given that is connected, what conclusion can we draw about the sets and ?    Complete the proof of the following lemma.    Let be a topological space, and let be a subset of . Assume that and form a separation of . If is a connected subset of , then or .      Now we can prove that any interval in is connected. Since , , and are all sets that lie between and , we can address their connectedness all at once with the next result.    Let be a topological space and a connected subset of . If is a subset of and , then is connected in .    Let be a topological space and a connected subset of . Let be a subset of such that . To show that is connected, assume to the contrary that is disconnected. Then there are nonempty open subsets and of that form a separation of . shows that or . Without loss of generality we assume that . Since , it follows that .  Since , there is an element . Since and , it must be the case that is a limit point of . Since is an open neighborhood of , it follows that . This contradiction allows us to conclude that is connected.    One consequence of is that any interval of the form , , , , or in is connected. This prompts the question, are there any other subsets of that are connected?    Let be a subset of .    Let be a single point subset of . Is connected? Explain.    Now suppose that is a subset of that contains two or more points. Assume that is not an interval. Then there must exist points and in and a point in between and . Use this idea to find a separation of . What can we conclude about ?    Explicitly describe the connected subsets of .    "
},
{
  "id": "activity-92",
  "level": "2",
  "url": "sec_connect_subset_rn.html#activity-92",
  "type": "Activity",
  "number": "18.5",
  "title": "",
  "body": "  Let be a topological space, and let be a subset of . Assume that and form a separation of . Let be a connected subset of . In this activity we want to prove that or .    Use the fact that and form a separation to to wxplain why and .    Given that is connected, what conclusion can we draw about the sets and ?    Complete the proof of the following lemma.    Let be a topological space, and let be a subset of . Assume that and form a separation of . If is a connected subset of , then or .     "
},
{
  "id": "thm_connected_limitpoints",
  "level": "2",
  "url": "sec_connect_subset_rn.html#thm_connected_limitpoints",
  "type": "Theorem",
  "number": "18.8",
  "title": "",
  "body": "  Let be a topological space and a connected subset of . If is a subset of and , then is connected in .    Let be a topological space and a connected subset of . Let be a subset of such that . To show that is connected, assume to the contrary that is disconnected. Then there are nonempty open subsets and of that form a separation of . shows that or . Without loss of generality we assume that . Since , it follows that .  Since , there is an element . Since and , it must be the case that is a limit point of . Since is an open neighborhood of , it follows that . This contradiction allows us to conclude that is connected.   "
},
{
  "id": "act_connected_subsets_R",
  "level": "2",
  "url": "sec_connect_subset_rn.html#act_connected_subsets_R",
  "type": "Activity",
  "number": "18.6",
  "title": "",
  "body": "  Let be a subset of .    Let be a single point subset of . Is connected? Explain.    Now suppose that is a subset of that contains two or more points. Assume that is not an interval. Then there must exist points and in and a point in between and . Use this idea to find a separation of . What can we conclude about ?    Explicitly describe the connected subsets of .   "
},
{
  "id": "sec_components",
  "level": "1",
  "url": "sec_components.html",
  "type": "Section",
  "number": "",
  "title": "Components",
  "body": " Components  As demonstrates, spaces like are not connected. Even so, is made of two connected subsets and . These connected subsets are called components .   component   A subspace of a topological space is a component (or connected component ) of if is connected and there is no larger connected subspace of that contains .    As an example, if , then the components of are , , and . As the next activity shows, we can always partition a topological space into a disjoint union of compenents.    Let be a nonempty topological space.    Show that if , then is connected.    Suppose that is a topological space and for in some indexing set is a collection of connected subsets of . Let . Suppose that . Show that is a connected subset of .   Assume a separation and use .    Part (a) shows that every element in belongs to some connected subset of . So we can write as a union of connected subsets. But there is probably overlap. To remove the overlap, we define the following relation on : For and in , if and are contained in the same connected subset of . As with any relation, we ask if is an equivalence relation.   Is a reflexive relation? Why or why not?   Is a symmetric relation? Why or why not?   Is a transitive relation? Why or why not?     shows that the relation is an equivalence relation, and so partitions the underlying topological space into disjoint sets. If , then the equivalence class of is a connected subset of . There can be no larger connected subset of that contains , since equivalence classes are disjoint or the same. So the equivalence classes are exactly the connected components of . The components of a topological space satisfy several properties.   Each is an element of exactly one connected component of .    A component contains all connected subsets of that contain . Thus, is the union of all connected subsets of that contain .    If and are in , then either or .    Every connected subset of is a subset of a connected component.    Every connected component of is a closed subset of .    The space is connected if and only if has exactly one connected component.     "
},
{
  "id": "p-2283",
  "level": "2",
  "url": "sec_components.html#p-2283",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "definition-74",
  "level": "2",
  "url": "sec_components.html#definition-74",
  "type": "Definition",
  "number": "18.9",
  "title": "",
  "body": " component   A subspace of a topological space is a component (or connected component ) of if is connected and there is no larger connected subspace of that contains .   "
},
{
  "id": "act_connected_compenent",
  "level": "2",
  "url": "sec_components.html#act_connected_compenent",
  "type": "Activity",
  "number": "18.7",
  "title": "",
  "body": "  Let be a nonempty topological space.    Show that if , then is connected.    Suppose that is a topological space and for in some indexing set is a collection of connected subsets of . Let . Suppose that . Show that is a connected subset of .   Assume a separation and use .    Part (a) shows that every element in belongs to some connected subset of . So we can write as a union of connected subsets. But there is probably overlap. To remove the overlap, we define the following relation on : For and in , if and are contained in the same connected subset of . As with any relation, we ask if is an equivalence relation.   Is a reflexive relation? Why or why not?   Is a symmetric relation? Why or why not?   Is a transitive relation? Why or why not?   "
},
{
  "id": "sec_cut_sets",
  "level": "1",
  "url": "sec_cut_sets.html",
  "type": "Section",
  "number": "",
  "title": "Cut Sets",
  "body": " Cut Sets  It can be difficult to determine if two topological spaces are homeomorphic. We can sometimes use topological invariants to determine if spaces are not homeomorphic. For example, if is connected and is not, then and are not homeomorphic. But just because two spaces are connected, it does not automatically follow that the spaces are homeomorphic. For example consider the spaces and . Both are connected subsets of . If we remove a point, say 1, from the set the resulting space is no longer connected. The same result is true if we remove any point from . However, if we remove the point from the resulting space is connected. So the spaces and are fundamentally different in this respect, and so are not homeomorphic. Any set that we can remove from a connected set to obtain a disconnected set is called a cut set .   cut set  cut point   A subset of a connected topological space is a cut set of if the set is disconnected. A point in a connected topological space is a cut point if is disconnected.      The point is a cut point of the space . In fact, every point in is a cut point of .    Let in . That is, is the closed disk of radius in the plane. The set has no cut points. However, if , then consists of two connected components: the open ball and the annulus as illustrated in . So is a cut set of .   The disk and cut set .      Once we have a new property, we then ask if that property is a topological invariant.    Let and be connected topological spaces and let be a homeomorphism. If is a cut set, then is a cut set of .    Let and be topological spaces with a homeomorphism. Let be a cut set of . Let and form a separation of . We will demonstrate that and form a separation of , which will prove that is a cut set of . Since is continuous, the sets and are open sets in . Next we prove that . Let . Since is a surjection, there exists an with . The fact that means that . So . If , then and if , then . So .  Now we demonstrate that and . Since and form a separation of , we know that and . Let . Then and . So and the fact that is an injection implies that . Thus, . The same argument shows that implies that . So and .  Finally, we show that . Suppose . Let such that . Since is an injection, we know that means . so . The fact that means that . Thus, . So . We then have . It follows that . Therefore, and form a separation of and is a cut set of .      Use the idea of cut sets\/points to explain why the unit circle in is not homeomorphic to the interval in . Note: the unit circle is the set . Draw pictures to illustrate your explanation. (A formal proof is not necessary, but you need to provide a convincing justification.)    Consider the following subsets of in the subspace topology: . Is homeomorphic to ? (A formal proof is not necessary, but you need to provide a convincing justification.)    We have seen that topological equivalence is an equivalence relation, which partitions the collection of all topological spaces into disjoint homeomorphism classes. Topological invariants can then help us identify the classes to which different spaces belong. In general, though, it can be more difficult to prove that two spaces are homeomorphic than not homeomorphic.   Consider the spaces , in , in , the line segment in between the points and , the space determined by the letter { X}, and the space determined by the letter { Y} in . Identify the distinct homeomorphism classes determined by these six spaces. No formal proofs are necessary, but you need to give convincing arguments.   "
},
{
  "id": "p-2301",
  "level": "2",
  "url": "sec_cut_sets.html#p-2301",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cut set "
},
{
  "id": "definition-75",
  "level": "2",
  "url": "sec_cut_sets.html#definition-75",
  "type": "Definition",
  "number": "18.10",
  "title": "",
  "body": " cut set  cut point   A subset of a connected topological space is a cut set of if the set is disconnected. A point in a connected topological space is a cut point if is disconnected.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec_cut_sets.html#example-12",
  "type": "Example",
  "number": "18.11",
  "title": "",
  "body": "  The point is a cut point of the space . In fact, every point in is a cut point of .    Let in . That is, is the closed disk of radius in the plane. The set has no cut points. However, if , then consists of two connected components: the open ball and the annulus as illustrated in . So is a cut set of .   The disk and cut set .     "
},
{
  "id": "theorem-58",
  "level": "2",
  "url": "sec_cut_sets.html#theorem-58",
  "type": "Theorem",
  "number": "18.13",
  "title": "",
  "body": "  Let and be connected topological spaces and let be a homeomorphism. If is a cut set, then is a cut set of .    Let and be topological spaces with a homeomorphism. Let be a cut set of . Let and form a separation of . We will demonstrate that and form a separation of , which will prove that is a cut set of . Since is continuous, the sets and are open sets in . Next we prove that . Let . Since is a surjection, there exists an with . The fact that means that . So . If , then and if , then . So .  Now we demonstrate that and . Since and form a separation of , we know that and . Let . Then and . So and the fact that is an injection implies that . Thus, . The same argument shows that implies that . So and .  Finally, we show that . Suppose . Let such that . Since is an injection, we know that means . so . The fact that means that . Thus, . So . We then have . It follows that . Therefore, and form a separation of and is a cut set of .   "
},
{
  "id": "activity-95",
  "level": "2",
  "url": "sec_cut_sets.html#activity-95",
  "type": "Activity",
  "number": "18.8",
  "title": "",
  "body": "  Use the idea of cut sets\/points to explain why the unit circle in is not homeomorphic to the interval in . Note: the unit circle is the set . Draw pictures to illustrate your explanation. (A formal proof is not necessary, but you need to provide a convincing justification.)    Consider the following subsets of in the subspace topology: . Is homeomorphic to ? (A formal proof is not necessary, but you need to provide a convincing justification.)   "
},
{
  "id": "activity-96",
  "level": "2",
  "url": "sec_cut_sets.html#activity-96",
  "type": "Activity",
  "number": "18.9",
  "title": "",
  "body": " Consider the spaces , in , in , the line segment in between the points and , the space determined by the letter { X}, and the space determined by the letter { Y} in . Identify the distinct homeomorphism classes determined by these six spaces. No formal proofs are necessary, but you need to give convincing arguments.  "
},
{
  "id": "sec_ivt_fpt",
  "level": "1",
  "url": "sec_ivt_fpt.html",
  "type": "Section",
  "number": "",
  "title": "The Intermediate Value Theorem and a Fixed Point Theorem",
  "body": " The Intermediate Value Theorem and a Fixed Point Theorem  In this section we present two important consequences of connectedness. The first consequence is the Intermediate Value Theorem. In calculus, the Intermediate Value Theorem tells us that if is a continuous function on a closed interval , then assumes all values between and . This result seems straightforward if one just draws a graph of a continuous function on a closed interval. But a picture is not a proof. We state and then prove a more general version of the Intermediate Value Theorem.   The Intermediate Value Theorem   Let be a topological space and a connected subset of . If is a continuous function, then for any and any between and , there is a point such that .      In this activity we prove the Intermediate Value Theorem. Let be a topological space and a connected subset of . Assume that is a continuous function, and let .    Explain why we can assume that .    Explain what happens if or .    Now assume that . Without loss of generality, assume that . Why can we say that is an interval?    How does the fact that is an interval complete the proof?    Our second consequence of connectedness involves a fixed point theorem. Fixed point theorems are important in mathematics. A fixed point of a function is an input so that . There are many fixed point theorems one of the most well-known is the Brouwer Fixed Point Theorem that shows that every continuous function from a closed ball in to itself must have a fixed point. We can use the Intermediate Value Theorem to prove this result in .    In this activity we prove the following theorem.    Let with , and let be a continuous function. Then there is a number such that .    So let with , and let be a continuous function.    Explain why we can assume that and .    Define by .   Why is a continuous function?   What can we say about and ? Use the Intermediate Value Theorem to complete the proof.    Let .   Show that maps the interval into the interval .   Use that a continuous function from a compact topological space to assumes a maximum and minimum value.   Find all values of in such that .    "
},
{
  "id": "theorem-59",
  "level": "2",
  "url": "sec_ivt_fpt.html#theorem-59",
  "type": "Theorem",
  "number": "18.14",
  "title": "The Intermediate Value Theorem.",
  "body": " The Intermediate Value Theorem   Let be a topological space and a connected subset of . If is a continuous function, then for any and any between and , there is a point such that .   "
},
{
  "id": "activity-97",
  "level": "2",
  "url": "sec_ivt_fpt.html#activity-97",
  "type": "Activity",
  "number": "18.10",
  "title": "",
  "body": "  In this activity we prove the Intermediate Value Theorem. Let be a topological space and a connected subset of . Assume that is a continuous function, and let .    Explain why we can assume that .    Explain what happens if or .    Now assume that . Without loss of generality, assume that . Why can we say that is an interval?    How does the fact that is an interval complete the proof?   "
},
{
  "id": "activity-98",
  "level": "2",
  "url": "sec_ivt_fpt.html#activity-98",
  "type": "Activity",
  "number": "18.11",
  "title": "",
  "body": "  In this activity we prove the following theorem.    Let with , and let be a continuous function. Then there is a number such that .    So let with , and let be a continuous function.    Explain why we can assume that and .    Define by .   Why is a continuous function?   What can we say about and ? Use the Intermediate Value Theorem to complete the proof.    Let .   Show that maps the interval into the interval .   Use that a continuous function from a compact topological space to assumes a maximum and minimum value.   Find all values of in such that .   "
},
{
  "id": "sec_connect_top_summ",
  "level": "1",
  "url": "sec_connect_top_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A topological space is connected  connected space if cannot be written as the union of two disjoint, nonempty, open subsets. A subset of a topological space topological space is connected if is connected in the subspace topology.    A separation of a subset of a topological space is a pair of nonempty open subsets and of such that    ,     ,     , and     .   Showing that a set has a separation can be a convenient way to show that the set is disconnected.    The connected subsets of are the intervals and the single point sets.    A subspace of a topological space is a connected component of if is connected and there is no larger connected subspace of that contains .    One application of connectedness is the Intermediate Value Theorem that tells us that if is a connected subset of a topological space and if is a continuous function, then for any and any between and , there is a point such that .    A subset of a connected topological space is a cut set of if the set is disconnected, while a point in is a cut point if is disconnected. The property of being a cut set or a cut point is a topological invariant, so we can sometimes use cut sets and cut points to show that topological spaces are not homeomorphic.     "
},
{
  "id": "p-2333",
  "level": "2",
  "url": "sec_connect_top_summ.html#p-2333",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "connected "
},
{
  "id": "sec_connect_top_exer",
  "level": "1",
  "url": "sec_connect_top_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Recall from that if and are two topologies on a set such that , then is said to be a coarser (or weaker ) topology than , or is a finer (or stronger ) topology than . In this exercise we explore the question of whether compactness is a property that is passed from weaker to stronger topologies or from stronger to weaker. Let and be two topologies on a set . If , what does connectedness under or imply, if anything, about compactness under the other topology? Justify your answers.    Let be a continuous function from a closed interval into the reals. Let and be such that for all . Prove that there is a between and such that .    Let be a connected subset of a topological space . Prove or disprove:    is connected    is connected    is connected    Let with the finite complement topology. We have shown that every subset of any topological space with the finite complement topology is compact. Now find all of the connected subsets of . Prove your result.    Give examples, with justification, of subsets and of a topological space to illustrate each of the following, or explain why no such example exists:    and are connected, but is disconnected    and are connected, but is disconnected    and are disconnected, but is connected    and are connected and , but is disconnected.    and are connected and , but is disconnected.    Let be a continuous function. Show that there is a point with .    Let with . Explain why no two of the sets , , and homeomorphic.    Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by . Show that is a connected space.    Even though is not a connected space, if is any element in then we can surround with a connected subset of . This is the idea of local connectedness.   locally connected   A topological space is locally connected at a point  if every neighborhood of contains an open connected neighborhood of . A topological space is locally connected if is locally connected at each point in .     Give an example of a locally connected space that is not connected.   It would be reasonable to believe that a connected space is locally connected. However, that is not the case. Consider the space as a subspace of with the standard Euclidean metric topology, where and .   Explain why is connected.   Show that is not locally connected.   Let be a point not on the -axis and find an open ball around that doesn't intersect the -axis.   Prove that a topological space is locally connected if and only if for every open set in , the connected components of are open in .    Let and be nonempty subsets of a topological space .   Prove that is disconnected if .   Prove that is connected if and only if for every pair of nonempty subsets and of such that we have .    Give examples of the following.   A topological space with exactly one cut point.   A topological space with exactly two cut points.   A topological space with infinitely many cut points.   A topological space with no cut points.    Let with . Prove that a homeomorphism carries end points into end points.    Let and be a topological spaces.   Assume that and homeomorphic spaces. Prove that there is a one-to-one correspondence between the connected components of and the connected components of .   Assume that and homeomorphic spaces. Prove that there is a one-to-one correspondence between the set of cut points of and the set of cut points of .   Consider each letter in the statement as a topological space with the standard Euclidean metric topology.  TOPOLOGY IS NEAT  Group the letters in the statement into disjoint homeomorphism classes. Explain in detail the reasons for your groupings.    Let be a topological space.   Prove that is disconnected if and only if has a proper subset that is both open and closed.   Prove that is disconnected if and only if there is a continuous function from onto a discrete two-point topological space.    Let be the set of real numbers.   Consider with the topology . Prove or disprove: is connected.   Consider with the topology .   Prove or disprove: is connected.   Prove or disprove: is connected.    Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the connected subsets of when    has the particular point topology     has the excluded point topology .    Let be a topological space and a connected subset of .   Show that if is Hausdorff, then is connected.   Let , where is the particular point topology on . Explain why is a connected subset of . Find in . Is it true that in any topological space, if is connected, then so is ? Explain. (See .)    Let be a topological space. Prove each of the following.   Each is an element of exactly one connected component of .   A component contains all connected subsets of that contain . Thus, is the union of all connected subsets of that contain .   If and are in , then either or .   Every connected subset of is a subset of a connected component.   Every connected component of is a closed subset of .   The space is connected if and only if has exactly one connected component.    Let be a topological space with only a finite number of connected components. Show that each component of is open.    Let and be connected spaces with a continuous function. Is it the case that if is a cut set of , then is a cut set of ? Prove your answer.    Let . There are 355 distinct topologies on , but they fit into the 33 distinct homeomorphism classes listed below. The list is ordered by decreasing number of singleton sets in the topology, and, when that is fixed, by increasing number of two-point subsets and then by increasing number of three-point subsets. Under which topologies is connected? Prove your answer.   the discrete topology                                                                                                                                    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a connected subset of a topological space with , then every point of is a limit point of .   If is a compact subspace of a Hausdorff space, then is connected.   If is a connected subspace of a Hausdorff space, then is compact.   Every subset of a topological space with the discrete topology is disconnected.   The set is a connected component of the topological space with topology .   The sets and form a separation of the set in the topological space with topology .   The connected topological space with topology has no cut points.   "
},
{
  "id": "exercise-210",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-210",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Recall from that if and are two topologies on a set such that , then is said to be a coarser (or weaker ) topology than , or is a finer (or stronger ) topology than . In this exercise we explore the question of whether compactness is a property that is passed from weaker to stronger topologies or from stronger to weaker. Let and be two topologies on a set . If , what does connectedness under or imply, if anything, about compactness under the other topology? Justify your answers.  "
},
{
  "id": "exercise-211",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-211",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a continuous function from a closed interval into the reals. Let and be such that for all . Prove that there is a between and such that .  "
},
{
  "id": "exercise-212",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-212",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a connected subset of a topological space . Prove or disprove:    is connected    is connected    is connected  "
},
{
  "id": "exercise-213",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-213",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let with the finite complement topology. We have shown that every subset of any topological space with the finite complement topology is compact. Now find all of the connected subsets of . Prove your result.  "
},
{
  "id": "exercise-214",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-214",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Give examples, with justification, of subsets and of a topological space to illustrate each of the following, or explain why no such example exists:    and are connected, but is disconnected    and are connected, but is disconnected    and are disconnected, but is connected    and are connected and , but is disconnected.    and are connected and , but is disconnected.  "
},
{
  "id": "exercise-215",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-215",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let be a continuous function. Show that there is a point with .  "
},
{
  "id": "exercise-216",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-216",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let with . Explain why no two of the sets , , and homeomorphic.  "
},
{
  "id": "exercise-217",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-217",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by . Show that is a connected space.  "
},
{
  "id": "exercise-218",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-218",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Even though is not a connected space, if is any element in then we can surround with a connected subset of . This is the idea of local connectedness.   locally connected   A topological space is locally connected at a point  if every neighborhood of contains an open connected neighborhood of . A topological space is locally connected if is locally connected at each point in .     Give an example of a locally connected space that is not connected.   It would be reasonable to believe that a connected space is locally connected. However, that is not the case. Consider the space as a subspace of with the standard Euclidean metric topology, where and .   Explain why is connected.   Show that is not locally connected.   Let be a point not on the -axis and find an open ball around that doesn't intersect the -axis.   Prove that a topological space is locally connected if and only if for every open set in , the connected components of are open in .  "
},
{
  "id": "exercise-219",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-219",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let and be nonempty subsets of a topological space .   Prove that is disconnected if .   Prove that is connected if and only if for every pair of nonempty subsets and of such that we have .  "
},
{
  "id": "exercise-220",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-220",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Give examples of the following.   A topological space with exactly one cut point.   A topological space with exactly two cut points.   A topological space with infinitely many cut points.   A topological space with no cut points.  "
},
{
  "id": "exercise-221",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-221",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let with . Prove that a homeomorphism carries end points into end points.  "
},
{
  "id": "exercise-222",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-222",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let and be a topological spaces.   Assume that and homeomorphic spaces. Prove that there is a one-to-one correspondence between the connected components of and the connected components of .   Assume that and homeomorphic spaces. Prove that there is a one-to-one correspondence between the set of cut points of and the set of cut points of .   Consider each letter in the statement as a topological space with the standard Euclidean metric topology.  TOPOLOGY IS NEAT  Group the letters in the statement into disjoint homeomorphism classes. Explain in detail the reasons for your groupings.  "
},
{
  "id": "exercise-223",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-223",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Let be a topological space.   Prove that is disconnected if and only if has a proper subset that is both open and closed.   Prove that is disconnected if and only if there is a continuous function from onto a discrete two-point topological space.  "
},
{
  "id": "exercise-224",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-224",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Let be the set of real numbers.   Consider with the topology . Prove or disprove: is connected.   Consider with the topology .   Prove or disprove: is connected.   Prove or disprove: is connected.  "
},
{
  "id": "ex_particular_point_connected",
  "level": "2",
  "url": "sec_connect_top_exer.html#ex_particular_point_connected",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the connected subsets of when    has the particular point topology     has the excluded point topology .  "
},
{
  "id": "exercise-226",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-226",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Let be a topological space and a connected subset of .   Show that if is Hausdorff, then is connected.   Let , where is the particular point topology on . Explain why is a connected subset of . Find in . Is it true that in any topological space, if is connected, then so is ? Explain. (See .)  "
},
{
  "id": "exercise-227",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-227",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Let be a topological space. Prove each of the following.   Each is an element of exactly one connected component of .   A component contains all connected subsets of that contain . Thus, is the union of all connected subsets of that contain .   If and are in , then either or .   Every connected subset of is a subset of a connected component.   Every connected component of is a closed subset of .   The space is connected if and only if has exactly one connected component.  "
},
{
  "id": "exercise-228",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-228",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": " Let be a topological space with only a finite number of connected components. Show that each component of is open.  "
},
{
  "id": "exercise-229",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-229",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": " Let and be connected spaces with a continuous function. Is it the case that if is a cut set of , then is a cut set of ? Prove your answer.  "
},
{
  "id": "exercise-230",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-230",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": " Let . There are 355 distinct topologies on , but they fit into the 33 distinct homeomorphism classes listed below. The list is ordered by decreasing number of singleton sets in the topology, and, when that is fixed, by increasing number of two-point subsets and then by increasing number of three-point subsets. Under which topologies is connected? Prove your answer.   the discrete topology                                                                                                                                  "
},
{
  "id": "exercise-231",
  "level": "2",
  "url": "sec_connect_top_exer.html#exercise-231",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a connected subset of a topological space with , then every point of is a limit point of .   If is a compact subspace of a Hausdorff space, then is connected.   If is a connected subspace of a Hausdorff space, then is compact.   Every subset of a topological space with the discrete topology is disconnected.   The set is a connected component of the topological space with topology .   The sets and form a separation of the set in the topological space with topology .   The connected topological space with topology has no cut points.  "
},
{
  "id": "sec_path_intro",
  "level": "1",
  "url": "sec_path_intro.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  We defined connectedness in terms of separability by open sets. There are other ways to look at connectedness. For example, the subset is connected in because we can draw a line segment (which we will call a path ) between any two points in and remain in the set . So we might alternatively consider a topological space to be connected if there is always a path from one point in the spaced to another. Although this is a new notion of connectedness, we will see that path connectedness and connectedness are related.  Intuitively, a space is path connected if there is a path in the space between any two points in the space. To formalize this idea, we need to define what we mean by a path. Simply put, a path is a continuous curve between two points. We can therefore define a path as a continuous function.   path   Let be a topological space. A path from point to point in is a continuous function such that and .    With the notion of path, we can now define path connectedness.   path connected   A subspace of a topological space is path connected if, given any there is a path in from to .      Is with the Euclidean metric topology path connected? Explain.    Is with the finite complement topology path connected? Explain.    Let in with and . Is connected? Is path connected? Explain.    "
},
{
  "id": "p-2455",
  "level": "2",
  "url": "sec_path_intro.html#p-2455",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path "
},
{
  "id": "definition-77",
  "level": "2",
  "url": "sec_path_intro.html#definition-77",
  "type": "Definition",
  "number": "19.1",
  "title": "",
  "body": " path   Let be a topological space. A path from point to point in is a continuous function such that and .   "
},
{
  "id": "definition-78",
  "level": "2",
  "url": "sec_path_intro.html#definition-78",
  "type": "Definition",
  "number": "19.2",
  "title": "",
  "body": " path connected   A subspace of a topological space is path connected if, given any there is a path in from to .   "
},
{
  "id": "exploration-18",
  "level": "2",
  "url": "sec_path_intro.html#exploration-18",
  "type": "Preview Activity",
  "number": "19.1",
  "title": "",
  "body": "  Is with the Euclidean metric topology path connected? Explain.    Is with the finite complement topology path connected? Explain.    Let in with and . Is connected? Is path connected? Explain.   "
},
{
  "id": "sec_path_connect",
  "level": "1",
  "url": "sec_path_connect.html",
  "type": "Section",
  "number": "",
  "title": "Path Connectedness",
  "body": " Path Connectedness  As with every new property we define, it is natural to ask if path connectedness is a topological property.    In this activity we prove .    Let and be topological spaces and let be a continuous function. If is a path connected subspace of , then is a path connected subspace of .    Assume that and are topological spaces, is a continuous function, and is path connected. To prove that is path connected, we choose two elements and in . It follows that there exist elements and in such that and .    Explain why there is a continuous function such that and .    Determine how and can be used to define a path from to . Be sure to explain why is a path. Conclude that is path connected.    A consequence of is the following.    Path connectedness is a topological property.    "
},
{
  "id": "activity-99",
  "level": "2",
  "url": "sec_path_connect.html#activity-99",
  "type": "Activity",
  "number": "19.2",
  "title": "",
  "body": "  In this activity we prove .    Let and be topological spaces and let be a continuous function. If is a path connected subspace of , then is a path connected subspace of .    Assume that and are topological spaces, is a continuous function, and is path connected. To prove that is path connected, we choose two elements and in . It follows that there exist elements and in such that and .    Explain why there is a continuous function such that and .    Determine how and can be used to define a path from to . Be sure to explain why is a path. Conclude that is path connected.   "
},
{
  "id": "corollary-11",
  "level": "2",
  "url": "sec_path_connect.html#corollary-11",
  "type": "Corollary",
  "number": "19.4",
  "title": "",
  "body": "  Path connectedness is a topological property.   "
},
{
  "id": "sec_path_connect_equiv",
  "level": "1",
  "url": "sec_path_connect_equiv.html",
  "type": "Section",
  "number": "",
  "title": "Path Connectedness as an Equivalence Relation",
  "body": " Path Connectedness as an Equivalence Relation  We saw that we could define an equivalence relation using connected subsets of a topological space, which partitions the space into a disjoint union of connected components. We might expect to be able to do something similar with path connectedness. The main difficulty will be transitivity. As illustrated in , if we have a path from to and a path from to , it appears that we can just follow the path from to , then path from to to have a path from to . But there are two problems to consider: how do we define this path as a function from into our space, and how do we know the resulting function is continuous. The next lemma will help.   A path from to .     The Gluing Lemma  Gluing Lemma   Let and be closed subsets of a space , and let and be continuous functions into a space such that for all . Then the function defined by is continuous.   The Gluing Lemma.      Let and be closed subsets of a space , and let and be continuous functions into a space such that for all as illustrated in . Define by   To show that is continuous, let be a closed subset of . Then .  Since is continuous, is closed in the subspace topology on and since is continuous is closed in the subspace topology on . So and for some closed sets and of . The fact that is closed in implies that is closed in . Similarly, the fact that is closed in implies that is closed in . Thus, is a finite union of closed sets in and so is closed in . Since is closed for every closed set in , it follows that is continuous.    We can use the Gluing Lemma to create a path from to given a path from to and a path from to .   Use the Gluing Lemma to explain why the path product given in the following definition is actually a path from to .   path product   Let be a path from to and a path from to in a space . The path product  is the path in defined by      Now we can show that path connectedness defines an equivalence relation on a topological space.    Let be a topological space. Define a relation on as follows: .    Explain why is a reflexive relation.    Explain why is a symmetric relation.    Explain why is a transitive relation.    Since as defined in is an equivalence relation, the relation partitions into a union of disjoint equivalence classes. The equivalence class of an element is called a path component of , and is the largest path connected subset of that contains .   path component   The path component of an element in a topological space is the largest path connected subset of that contains .    "
},
{
  "id": "F_path_transitive",
  "level": "2",
  "url": "sec_path_connect_equiv.html#F_path_transitive",
  "type": "Figure",
  "number": "19.5",
  "title": "",
  "body": " A path from to .   "
},
{
  "id": "lemma-6",
  "level": "2",
  "url": "sec_path_connect_equiv.html#lemma-6",
  "type": "Lemma",
  "number": "19.6",
  "title": "The Gluing Lemma.",
  "body": " The Gluing Lemma  Gluing Lemma   Let and be closed subsets of a space , and let and be continuous functions into a space such that for all . Then the function defined by is continuous.   The Gluing Lemma.      Let and be closed subsets of a space , and let and be continuous functions into a space such that for all as illustrated in . Define by   To show that is continuous, let be a closed subset of . Then .  Since is continuous, is closed in the subspace topology on and since is continuous is closed in the subspace topology on . So and for some closed sets and of . The fact that is closed in implies that is closed in . Similarly, the fact that is closed in implies that is closed in . Thus, is a finite union of closed sets in and so is closed in . Since is closed for every closed set in , it follows that is continuous.   "
},
{
  "id": "activity-100",
  "level": "2",
  "url": "sec_path_connect_equiv.html#activity-100",
  "type": "Activity",
  "number": "19.3",
  "title": "",
  "body": " Use the Gluing Lemma to explain why the path product given in the following definition is actually a path from to .   path product   Let be a path from to and a path from to in a space . The path product  is the path in defined by     "
},
{
  "id": "activity-101",
  "level": "2",
  "url": "sec_path_connect_equiv.html#activity-101",
  "type": "Activity",
  "number": "19.4",
  "title": "",
  "body": "  Let be a topological space. Define a relation on as follows: .    Explain why is a reflexive relation.    Explain why is a symmetric relation.    Explain why is a transitive relation.   "
},
{
  "id": "p-2484",
  "level": "2",
  "url": "sec_path_connect_equiv.html#p-2484",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path component "
},
{
  "id": "definition-80",
  "level": "2",
  "url": "sec_path_connect_equiv.html#definition-80",
  "type": "Definition",
  "number": "19.9",
  "title": "",
  "body": " path component   The path component of an element in a topological space is the largest path connected subset of that contains .   "
},
{
  "id": "sec_connectedness",
  "level": "1",
  "url": "sec_connectedness.html",
  "type": "Section",
  "number": "",
  "title": "Path Connectedness and Connectedness",
  "body": " Path Connectedness and Connectedness  Path connectedness and connectedness are different concepts, but they are related. In this section we will show that any path connected space must also be connected. We will see later that the converse is not true except in finite topological spaces.    If a topological space is path connected, then is connected.    Suppose that is path connected. Let and for any let be a path from to . Let . Now is the continuous image of the connected set in , so is connected. Also, and . Thus, every set contains and so is not empty. Therefore, is a connected subset of . But every is in a , so . We conclude that is connected.    In the following sections we explore the reverse implication in  that is, does connectedness imply path connectedness.  "
},
{
  "id": "thm_pctoc",
  "level": "2",
  "url": "sec_connectedness.html#thm_pctoc",
  "type": "Theorem",
  "number": "19.10",
  "title": "",
  "body": "  If a topological space is path connected, then is connected.    Suppose that is path connected. Let and for any let be a path from to . Let . Now is the continuous image of the connected set in , so is connected. Also, and . Thus, every set contains and so is not empty. Therefore, is a connected subset of . But every is in a , so . We conclude that is connected.   "
},
{
  "id": "sec_connect_finite",
  "level": "1",
  "url": "sec_connect_finite.html",
  "type": "Section",
  "number": "",
  "title": "Path Connectedness and Connectedness in Finite Topological Spaces",
  "body": " Path Connectedness and Connectedness in Finite Topological Spaces  In this section we will demonstrate that connectedness and path connectedness are equivalent concepts in finite topological spaces. In the following section, we prove that path connectedness and connectedness are not equivalent in infinite topological spaces. Throughout this section, we assume that is a finite topological space. We begin with an example to motivate the main ideas.    Let and . Assume that is a topology on .    Is connected? Explain.    For each , let be the intersection of all open sets that contain (we call a minimal neighborhood of ).   minimal neighborhood   For , the minimal neighborhood  of is the intersection of all open sets that contain .    Find for each .    We will see that the minimal neighborhoods of are path connected. Here we will illustrate with .   Let be defined by Show that is a path in from to .   Let be defined by Show that is a path in from to .   Explain why is path connected.    The terminology in is apt. Since every neighborhood of a point must contain an open set with , it follows that . So every neighborhood of has as a subset. In addition, when is finite, the set is a finite intersection of open sets, so the sets are open sets (this is not true in general in infinite topological spaces you are asked to find an example in ). In we saw that was path connected for a particular in one example. The next activity shows that this result is true in general in finite topological spaces.    Let be a finite topological space, and let . In this activity we demonstrate that is path connected. Let and define by   To prove that is continuous, let be an open set in . We either have or .    Suppose . Why must also be in ? What, then, is ?    Now suppose . There are two cases to consider.   What is if ?   What is if ?    Explain why is a path from to .    Show that we can find a path between any two points in . Conclude that is path connected.    The sets collectively form the space , and each of the is a path connected subspace. So every point in is contained in some neighborhood with a path connected subset containing . Spaces with this property are called locally path connected .   path connected locally   A topological space is locally path connected at  if every neighborhood of contains a path connected open neighborhood with as an element. The space is locally path connected if is locally path connected at every point.    If is a finite topological space, for any the set is the smallest open set containing . This means that any neighborhood of of will contain as a subset. Thus, a finite topological space is locally path connected (this is not true in general of infinite topological spaces, see for example). One consequence of a locally path connected space is the following.    A space is locally path connected if and only if for every open set of , each path component of is open in .    Let be a locally path connected topological space. We first show that for every open set in , every path component of is open in . Let be an open set in and let be a path component of . Let . Since is locally path connected, the neighborhood of contains an open path connected neighborhood of . The fact that and is a path component of implies that . Thus, contains a neighborhood of and is open.  Now we show that if for every open set in the path components of are open in , then is locally path connected. Let and let be a neighborhood of . Then contains an open set with . Let be the path component in that contains . Now is path connected and, by hypothesis, is open in and so is an open path connected neighborhood of . Thus, contains a path connected neighborhood of and is locally path connected at every point.    Since is open in whenever is a topological space, a natural corollary of is the following.    Let be a locally path connected topological space. Then every path component of is open in .    Since there are only finitely many open sets in the finite space , any arbitrary intersection of open sets in just reduces to a finite intersection. So the intersection of any collection of open sets in is again an open set in . We will show that is a union of path connected components, which will ultimately allow us to prove that if is connected, then is also path connected.    Let be a locally path connected topological space. In this activity we will prove that the components and path components of are the same.    Let , and let be the component of containing and be the path component of containing . Show that .    To complete the proof that , proceed by contradiction and assume that . Let be the union of all path components of that are different from and that intersect . Each such path component is connected, and is therefore a subset of . So . Explain why and form a separation of .   How do we use the fact that is locally path connected?    We can now complete our main result of this section.    Let be a finite topological space. Then is connected if and only if is path connected.    Let be a finite topological space. demonstrates that if is path connected, then is connected. For the reverse implication, assume that is path connected. Then is composed of a single path component, . Since the path components and components of are the same, we conclude that is a component of and that is connected.    "
},
{
  "id": "act_minimal_nbhds",
  "level": "2",
  "url": "sec_connect_finite.html#act_minimal_nbhds",
  "type": "Activity",
  "number": "19.5",
  "title": "",
  "body": "  Let and . Assume that is a topology on .    Is connected? Explain.    For each , let be the intersection of all open sets that contain (we call a minimal neighborhood of ).   minimal neighborhood   For , the minimal neighborhood  of is the intersection of all open sets that contain .    Find for each .    We will see that the minimal neighborhoods of are path connected. Here we will illustrate with .   Let be defined by Show that is a path in from to .   Let be defined by Show that is a path in from to .   Explain why is path connected.   "
},
{
  "id": "activity-103",
  "level": "2",
  "url": "sec_connect_finite.html#activity-103",
  "type": "Activity",
  "number": "19.6",
  "title": "",
  "body": "  Let be a finite topological space, and let . In this activity we demonstrate that is path connected. Let and define by   To prove that is continuous, let be an open set in . We either have or .    Suppose . Why must also be in ? What, then, is ?    Now suppose . There are two cases to consider.   What is if ?   What is if ?    Explain why is a path from to .    Show that we can find a path between any two points in . Conclude that is path connected.   "
},
{
  "id": "p-2509",
  "level": "2",
  "url": "sec_connect_finite.html#p-2509",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "locally path connected "
},
{
  "id": "definition-82",
  "level": "2",
  "url": "sec_connect_finite.html#definition-82",
  "type": "Definition",
  "number": "19.12",
  "title": "",
  "body": " path connected locally   A topological space is locally path connected at  if every neighborhood of contains a path connected open neighborhood with as an element. The space is locally path connected if is locally path connected at every point.   "
},
{
  "id": "lem_open_PC",
  "level": "2",
  "url": "sec_connect_finite.html#lem_open_PC",
  "type": "Lemma",
  "number": "19.13",
  "title": "",
  "body": "  A space is locally path connected if and only if for every open set of , each path component of is open in .    Let be a locally path connected topological space. We first show that for every open set in , every path component of is open in . Let be an open set in and let be a path component of . Let . Since is locally path connected, the neighborhood of contains an open path connected neighborhood of . The fact that and is a path component of implies that . Thus, contains a neighborhood of and is open.  Now we show that if for every open set in the path components of are open in , then is locally path connected. Let and let be a neighborhood of . Then contains an open set with . Let be the path component in that contains . Now is path connected and, by hypothesis, is open in and so is an open path connected neighborhood of . Thus, contains a path connected neighborhood of and is locally path connected at every point.   "
},
{
  "id": "corollary-12",
  "level": "2",
  "url": "sec_connect_finite.html#corollary-12",
  "type": "Corollary",
  "number": "19.14",
  "title": "",
  "body": "  Let be a locally path connected topological space. Then every path component of is open in .   "
},
{
  "id": "activity-104",
  "level": "2",
  "url": "sec_connect_finite.html#activity-104",
  "type": "Activity",
  "number": "19.7",
  "title": "",
  "body": "  Let be a locally path connected topological space. In this activity we will prove that the components and path components of are the same.    Let , and let be the component of containing and be the path component of containing . Show that .    To complete the proof that , proceed by contradiction and assume that . Let be the union of all path components of that are different from and that intersect . Each such path component is connected, and is therefore a subset of . So . Explain why and form a separation of .   How do we use the fact that is locally path connected?   "
},
{
  "id": "theorem-63",
  "level": "2",
  "url": "sec_connect_finite.html#theorem-63",
  "type": "Theorem",
  "number": "19.15",
  "title": "",
  "body": "  Let be a finite topological space. Then is connected if and only if is path connected.    Let be a finite topological space. demonstrates that if is path connected, then is connected. For the reverse implication, assume that is path connected. Then is composed of a single path component, . Since the path components and components of are the same, we conclude that is a component of and that is connected.   "
},
{
  "id": "sec_connect_infinite",
  "level": "1",
  "url": "sec_connect_infinite.html",
  "type": "Section",
  "number": "",
  "title": "Path Connectedness and Connectedness in Infinite Topological Spaces",
  "body": " Path Connectedness and Connectedness in Infinite Topological Spaces  topologist's sine curve  Given that connectedness and path connectedness are equivalent in finite topological spaces, a reasonable question now is whether the converse of is true in arbitrary topological spaces. As we will see, the answer is no. To find a counterexample, we need to look in an infinite topological space. There are many examples, but a standard example to consider is the topologist's sine curve . This curve is defined as the union of the sets .  A picture of is shown in .   The topologist's sine curve.    To understand if is connected, let us consider the relationship between and . seems to indicate that . To see if this is true, let , and let be a neighborhood of . Then there is an such that . Choose such that , and let . Then , and so and every neighborhood of contains a point in . Therefore, and in . The fact that is connected follows from .  Now that we know that is connected, the following theorem demonstrates that is a connected space that is not path connected.    The topologist's sine curve is connected but not path connected.    We know that is connected, so it remains to show that is not path connected. The sets and are connected (as continuous images of the interval and , respectively). We will prove that there is no path in from to for any point by contradiction. Assume the existence of such a path . Let and . Then .  Note that is an open subset of , since . So the continuity of implies that is an open subset of . Also, the fact that means that , and the fact that means that . If we demonstrate that is an open subset of , then Equation will imply that is not connected, a contradiction. So we proceed to prove that is open in .  Let , and so in . The set is open in . The continuity of then tells us that is open in . So there is a such that the open ball is a subset of . We will prove that . This will imply that and so is a neighborhood of each of its points, and is therefore an open set.   The set .    Every element in is mapped into by the path . The set is complicated, consisting of infinitely many sub-curves of the curve , along with points in , as illustrated in . To simplify our analysis, let us consider the projection onto the -axis. The function defined by is a continuous function. Let . Since , we know that . Let . So . Since is a connected set ( is an interval), we know that is a connected set. The fact that is continuous means that is connected as well. Now is a bounded subset of , so must be a bounded interval. Recall that and so . The fact that tells us that . So . There are two possibilities for : either , or is an interval of positive length. We consider the cases.  Suppose . Then the projection of onto the -axis is the single point and as desired. Suppose that is an interval of the form or for some positive number . The structure of would indicate that there must be some gaps in the set , the projection of onto the -axis. This implies that cannot be a connected interval. We proceed to show this. In other words, we will prove that (which is impossible since ). Remember that , so let . We consider what happens if and when .  Suppose . Then the ball contains only points with value less than 1. Let so that . Then . But , and so is not in . Thus, . Thus we have found a point in .  Finally, suppose . Then the ball contains only points with value greater than . Let so that . Then . But , and so . Thus we have found a point in .  We conclude that there can be no path in from to any point in , completing our proof that is not path connected. (In fact, the argument given shows that there is no path in from any point in to any point in .    "
},
{
  "id": "p-2525",
  "level": "2",
  "url": "sec_connect_infinite.html#p-2525",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topologist's sine curve "
},
{
  "id": "F_T_sin",
  "level": "2",
  "url": "sec_connect_infinite.html#F_T_sin",
  "type": "Figure",
  "number": "19.16",
  "title": "",
  "body": " The topologist's sine curve.   "
},
{
  "id": "theorem-64",
  "level": "2",
  "url": "sec_connect_infinite.html#theorem-64",
  "type": "Theorem",
  "number": "19.17",
  "title": "",
  "body": "  The topologist's sine curve is connected but not path connected.    We know that is connected, so it remains to show that is not path connected. The sets and are connected (as continuous images of the interval and , respectively). We will prove that there is no path in from to for any point by contradiction. Assume the existence of such a path . Let and . Then .  Note that is an open subset of , since . So the continuity of implies that is an open subset of . Also, the fact that means that , and the fact that means that . If we demonstrate that is an open subset of , then Equation will imply that is not connected, a contradiction. So we proceed to prove that is open in .  Let , and so in . The set is open in . The continuity of then tells us that is open in . So there is a such that the open ball is a subset of . We will prove that . This will imply that and so is a neighborhood of each of its points, and is therefore an open set.   The set .    Every element in is mapped into by the path . The set is complicated, consisting of infinitely many sub-curves of the curve , along with points in , as illustrated in . To simplify our analysis, let us consider the projection onto the -axis. The function defined by is a continuous function. Let . Since , we know that . Let . So . Since is a connected set ( is an interval), we know that is a connected set. The fact that is continuous means that is connected as well. Now is a bounded subset of , so must be a bounded interval. Recall that and so . The fact that tells us that . So . There are two possibilities for : either , or is an interval of positive length. We consider the cases.  Suppose . Then the projection of onto the -axis is the single point and as desired. Suppose that is an interval of the form or for some positive number . The structure of would indicate that there must be some gaps in the set , the projection of onto the -axis. This implies that cannot be a connected interval. We proceed to show this. In other words, we will prove that (which is impossible since ). Remember that , so let . We consider what happens if and when .  Suppose . Then the ball contains only points with value less than 1. Let so that . Then . But , and so is not in . Thus, . Thus we have found a point in .  Finally, suppose . Then the ball contains only points with value greater than . Let so that . Then . But , and so . Thus we have found a point in .  We conclude that there can be no path in from to any point in , completing our proof that is not path connected. (In fact, the argument given shows that there is no path in from any point in to any point in .   "
},
{
  "id": "sec_path_summ",
  "level": "1",
  "url": "sec_path_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following.   A path in a topological space is a continuous function from the interval to . If and , then is a path from to .    A subspace of a topological space is path connected if, given any there is a path in from to .    The path component of an element in a topological space is the largest path connected subset of that contains .    A topological space is locally path connected at if every neighborhood of contains a path connected subset with as an element. The space is locally path connected if is locally path connected at every point.    Connectedness and path connectedness are equivalent in finite topological spaces, and path connectedness implies connectedness in general. However, there are topological spaces that are connected but not path connected. One example is the topologist's sine curve.     "
},
{
  "id": "sec_path_exer",
  "level": "1",
  "url": "sec_path_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Find a topological space and a point such that the minimal neighborhood of is not an open set.    Let be a topological space and for each let denote the path component of . Prove the following.   If is a path connected subset of , then for some .   The space is path connected if and only if for some .    In of we showed that an arbitrary union of connected sets is connected provided the intersection of those sets is not empty. Is the same result true for path connected sets. That is, if is a topological space and for in some indexing set is a collection of path connected subsets of and , must it be the case that is path connected? Prove your answer.    Let be the subspace of consisting of the line segments joining the point to every point in the set as illustrated in . This space is called the harmonic broom .   The harmonic broom.     Show that the harmonic broom is connected.   Show that the harmonic broom is path connected.   Show that the harmonic broom is not locally connected.   Show that the harmonic broom is not locally path connected. So path connectedness does not imply local path connectedness.    In we see an example of a space that is path connected but not locally path connected. Is it possible to find a space that is locally path connected but not path connected? Verify your answer.    Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by . Show that is not path connected. (Hint: Suppose there is a path between and where and .)    We know that a space can be connected but not path connected. We also know that local path connectedness does not imply connectedness. However, if we combine these conditions then a space must be path connected. That is, show that if a topological space is connected and locally path connected, then is path connected.    Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the path connected subsets of when    has the particular point topology     has the excluded point topology .    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a path connected topological space, then any subspace of is path connected.   If and are path connected subspaces of a topological space , then is path connected.   There is no path from to in , where is the discrete topology.   If is a compact locally path connected topological space, then has only finitely many path components.   Every locally path connected space is locally connected.   "
},
{
  "id": "ex_U_x_not_open",
  "level": "2",
  "url": "sec_path_exer.html#ex_U_x_not_open",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find a topological space and a point such that the minimal neighborhood of is not an open set.  "
},
{
  "id": "exercise-233",
  "level": "2",
  "url": "sec_path_exer.html#exercise-233",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a topological space and for each let denote the path component of . Prove the following.   If is a path connected subset of , then for some .   The space is path connected if and only if for some .  "
},
{
  "id": "exercise-234",
  "level": "2",
  "url": "sec_path_exer.html#exercise-234",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " In of we showed that an arbitrary union of connected sets is connected provided the intersection of those sets is not empty. Is the same result true for path connected sets. That is, if is a topological space and for in some indexing set is a collection of path connected subsets of and , must it be the case that is path connected? Prove your answer.  "
},
{
  "id": "ex_PC_harmonic_broom",
  "level": "2",
  "url": "sec_path_exer.html#ex_PC_harmonic_broom",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be the subspace of consisting of the line segments joining the point to every point in the set as illustrated in . This space is called the harmonic broom .   The harmonic broom.     Show that the harmonic broom is connected.   Show that the harmonic broom is path connected.   Show that the harmonic broom is not locally connected.   Show that the harmonic broom is not locally path connected. So path connectedness does not imply local path connectedness.  "
},
{
  "id": "exercise-236",
  "level": "2",
  "url": "sec_path_exer.html#exercise-236",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " In we see an example of a space that is path connected but not locally path connected. Is it possible to find a space that is locally path connected but not path connected? Verify your answer.  "
},
{
  "id": "exercise-237",
  "level": "2",
  "url": "sec_path_exer.html#exercise-237",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Let . Let be the collection of all open intervals of the form and all sets of the form , where are real numbers as in . Let be the topology generated by . Show that is not path connected. (Hint: Suppose there is a path between and where and .)  "
},
{
  "id": "exercise-238",
  "level": "2",
  "url": "sec_path_exer.html#exercise-238",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " We know that a space can be connected but not path connected. We also know that local path connectedness does not imply connectedness. However, if we combine these conditions then a space must be path connected. That is, show that if a topological space is connected and locally path connected, then is path connected.  "
},
{
  "id": "exercise-239",
  "level": "2",
  "url": "sec_path_exer.html#exercise-239",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let be a nonempty set and let be a fixed element in . Let be the particular point topology and the excluded point topology on . That is    is the collection of subsets of consisting of , , and all of the subsets of that contain .     is the collection of subsets of consisting of , , and all of the subsets of that do not contain .   That the particular point and excluded point topologies are topologies is the subject of and . Determine, with proof, the path connected subsets of when    has the particular point topology     has the excluded point topology .  "
},
{
  "id": "exercise-240",
  "level": "2",
  "url": "sec_path_exer.html#exercise-240",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why.   If is a path connected topological space, then any subspace of is path connected.   If and are path connected subspaces of a topological space , then is path connected.   There is no path from to in , where is the discrete topology.   If is a compact locally path connected topological space, then has only finitely many path components.   Every locally path connected space is locally connected.  "
},
{
  "id": "sec_prod_top",
  "level": "1",
  "url": "sec_prod_top.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  In we saw how we can make a Cartesian product of two metric spaces into a metric space. This is exactly the construction that allows us to work with the Cartesian plane as a metric space with the usual metric. As we discussed in , every metric space is a topological space, but not every topological space is metrizable. So knowing how to make a product of metric spaces into a metric space still leaves open the question of how we can make the product of topological spaces into a topological space. If we have two topological spaces and , a natural approach to this problem might be to take as the open sets in the sets of the form where and . We investigate this idea in .    Let with , and let with .    Let . List all of the sets in along with their elements.    Assume that all of the sets in are open sets in . Should the set be an open set in ? Is the set of the form for some open sets in and in ? Explain. Is a topology on ?    If is not a topology on , what is the smallest collection of sets would we need to add to to make a topology on ? Explain your process.    "
},
{
  "id": "PA_pd_top_1",
  "level": "2",
  "url": "sec_prod_top.html#PA_pd_top_1",
  "type": "Preview Activity",
  "number": "20.1",
  "title": "",
  "body": "  Let with , and let with .    Let . List all of the sets in along with their elements.    Assume that all of the sets in are open sets in . Should the set be an open set in ? Is the set of the form for some open sets in and in ? Explain. Is a topology on ?    If is not a topology on , what is the smallest collection of sets would we need to add to to make a topology on ? Explain your process.   "
},
{
  "id": "sec_top_prod_space",
  "level": "1",
  "url": "sec_top_prod_space.html",
  "type": "Section",
  "number": "",
  "title": "The Topology on a Product of Topological Spaces",
  "body": " The Topology on a Product of Topological Spaces  In our preview activity we learned that we cannot make a topology on a product of topological spaces and with just the sets of the form where and as the open sets since the collection of these sets is not closed under arbitrary unions. What we can do instead is consider these unions of all of the sets of the form , where is open in and is open in . In other words, consider these sets to be a basis for the topology on .   Let and be topological spaces, and let be as defined in . Prove that is a basis for a topology on .   The argument from can be extended to a product of any finite number of topological spaces. Let be a positive integer and let be topological spaces for from to . Let .  Since for every , every point in is in a set in . So satisfies condition 1 of a basis. Now we show that satisfies the second condition of a basis. Let and for some open sets , in . Suppose . Then for each we have and so .  Since is an open set in , it follows that is in . Thus, is a basis for a topology on .  This topology generated by products of open sets is called the box or product topology.   box topology  product topology   Let be a collection of topological spaces for in some finite indexing set . The box topology or product topology on the product is the topology with basis .    So we can always make the product of topological spaces into a topological space using the box topology.  "
},
{
  "id": "act_box_topology",
  "level": "2",
  "url": "sec_top_prod_space.html#act_box_topology",
  "type": "Activity",
  "number": "20.2",
  "title": "",
  "body": " Let and be topological spaces, and let be as defined in . Prove that is a basis for a topology on .  "
},
{
  "id": "p-2584",
  "level": "2",
  "url": "sec_top_prod_space.html#p-2584",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "box product "
},
{
  "id": "def_box_topology",
  "level": "2",
  "url": "sec_top_prod_space.html#def_box_topology",
  "type": "Definition",
  "number": "20.1",
  "title": "",
  "body": " box topology  product topology   Let be a collection of topological spaces for in some finite indexing set . The box topology or product topology on the product is the topology with basis .   "
},
{
  "id": "sec_prod_top_exam",
  "level": "1",
  "url": "sec_prod_top_exam.html",
  "type": "Section",
  "number": "",
  "title": "Three Examples",
  "body": " Three Examples  In this section we consider three specific examples of a product of topological spaces.    Let and as subspaces of .    Explain in detail what the product space looks like.    Find, if possible, an open subset of that is not of the form where is open in and is open in .      Let and , the unit circle as a subset of .    Draw a picture of . For each , the set is a subset of . On your graph of , draw pictures of for equal to , , and . Explain in detail what the product space looks like.    Consider the sets of the form , where is an open ball in (relatively open sets in ). What do these sets look like?    Describe the shape of the basis elements for the product topology on that result from products of the form , where is an open interval in and is the intersections of with an open ball in .      Let be the circle of radius centered at the origin as a subset of . In this activity we investigate the space .    Draw a picture of in the -plane. For each , the set is a subset of . On your graph of , draw pictures of for equal to , , and . Orient the graphs so that the copies of are perpendicular to . Explain in detail what the product space looks like.    Consider the sets of the form , where is an open ball in . What do these sets look like?    Describe the shape of the basis elements for the product topology on that result from products of the form , where and are intersections of with open balls in .    "
},
{
  "id": "activity-106",
  "level": "2",
  "url": "sec_prod_top_exam.html#activity-106",
  "type": "Activity",
  "number": "20.3",
  "title": "",
  "body": "  Let and as subspaces of .    Explain in detail what the product space looks like.    Find, if possible, an open subset of that is not of the form where is open in and is open in .   "
},
{
  "id": "activity-107",
  "level": "2",
  "url": "sec_prod_top_exam.html#activity-107",
  "type": "Activity",
  "number": "20.4",
  "title": "",
  "body": "  Let and , the unit circle as a subset of .    Draw a picture of . For each , the set is a subset of . On your graph of , draw pictures of for equal to , , and . Explain in detail what the product space looks like.    Consider the sets of the form , where is an open ball in (relatively open sets in ). What do these sets look like?    Describe the shape of the basis elements for the product topology on that result from products of the form , where is an open interval in and is the intersections of with an open ball in .   "
},
{
  "id": "activity-108",
  "level": "2",
  "url": "sec_prod_top_exam.html#activity-108",
  "type": "Activity",
  "number": "20.5",
  "title": "",
  "body": "  Let be the circle of radius centered at the origin as a subset of . In this activity we investigate the space .    Draw a picture of in the -plane. For each , the set is a subset of . On your graph of , draw pictures of for equal to , , and . Orient the graphs so that the copies of are perpendicular to . Explain in detail what the product space looks like.    Consider the sets of the form , where is an open ball in . What do these sets look like?    Describe the shape of the basis elements for the product topology on that result from products of the form , where and are intersections of with open balls in .   "
},
{
  "id": "sec_proj_cont_prod",
  "level": "1",
  "url": "sec_proj_cont_prod.html",
  "type": "Section",
  "number": "",
  "title": "Projections and Continuous Functions on Products",
  "body": " Projections and Continuous Functions on Products  Given topological spaces and , we define and by and . These functions and are the projections  projection functions of onto and , respectively. These projection functions can help us determine when a function from a topological space to is continuous.    Let and be topological spaces and let be an open set in .    Determine which set is . Verify your conjecture.    Explain why is continuous.    The same argument as in shows that is also a continuous function. In general, if is a finite product of topological spaces, then the projection is a continuous function for each , where .  Let be a basic open set in , where is a topological space for each . We can extend the result of to see that .  So .  So each basic open set is a finite intersection of sets of the form where is open in . When this happens, we call the collection of sets of the form a subbasis of the topology.   subbasis  subbase   Let be a topological space. A subset of is a subbasis or subbase for if the set of all finite intersections of elements of is a basis for .    As an example, since finite intersections of intervals of the form and give all intervals of the form , the collection is a subbasis for the standard topology on . Note that this collection itself is not a basis for the standard topology on . If is a product of topological space, then another example of a subbasis is the collection .  This set is a subbasis for the product topology on (the verification of this is left to ).   product topology We note here that there is another topology, called the product topology , on with subbasis , where .  For reasons we won't go into, the product topology is preferred to the box topology for infinite products (many important theorems that hold for finite products will not hold for infinite products using the box topology, but will hold using the product topology). However, the product topology and the box topology are the same for finite products, and since we won't consider infinite products here we will not worry about the distinction. For our purposes we will use the terms box topology and product topology interchangeably.  As we have discussed before, it can often be easier to define a topology using a basis or subbasis than it is to describe all of the sets in the topology. As we might expect, since the continuity of a function can be determined by the inverse image of basis elements, the continuity of a function can also be determined by the inverse image of subbasis elements.    Prove .    Let and be topological spaces, let be a subbasis for , and let be a function. If is open in for each , then is continuous.      Recall that is continuous if is open in for each basic open set .    Now suppose that , , and are topological spaces, and that is a function. Then maps to and maps to . Since the composition of continuous functions is continuous, we can see that if is continuous so are and . To determine if is a continuous function, it would be useful to know if the converse is true. A key idea in the proof is the result of that if , , and are sets, and and are functions, then for any subset of .  Now we can use projections to determine when functions to product spaces are continuous.    Let for from to and be topological spaces, and let be a function. Then is continuous if and only if is continuous for each .    Let for from to and be topological spaces, and let be a function. If is continuous, the facts that each is continuous and that composites of continuous functions are continuous show that is continuous for each .  Now suppose that is continuous for each . Recall that is a subbasis for the product topology on . To prove that is continuous, tells us that it is enough to show that is open for each in . Let be an open set in . tells us that , which is open in because is continuous. Therefore, is continuous.    "
},
{
  "id": "p-2599",
  "level": "2",
  "url": "sec_proj_cont_prod.html#p-2599",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projections "
},
{
  "id": "act_projection_continuous",
  "level": "2",
  "url": "sec_proj_cont_prod.html#act_projection_continuous",
  "type": "Activity",
  "number": "20.6",
  "title": "",
  "body": "  Let and be topological spaces and let be an open set in .    Determine which set is . Verify your conjecture.    Explain why is continuous.   "
},
{
  "id": "p-2606",
  "level": "2",
  "url": "sec_proj_cont_prod.html#p-2606",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subbasis "
},
{
  "id": "def_subbasis",
  "level": "2",
  "url": "sec_proj_cont_prod.html#def_subbasis",
  "type": "Definition",
  "number": "20.2",
  "title": "",
  "body": " subbasis  subbase   Let be a topological space. A subset of is a subbasis or subbase for if the set of all finite intersections of elements of is a basis for .   "
},
{
  "id": "p-2610",
  "level": "2",
  "url": "sec_proj_cont_prod.html#p-2610",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product topology "
},
{
  "id": "activity-110",
  "level": "2",
  "url": "sec_proj_cont_prod.html#activity-110",
  "type": "Activity",
  "number": "20.7",
  "title": "",
  "body": "  Prove .    Let and be topological spaces, let be a subbasis for , and let be a function. If is open in for each , then is continuous.      Recall that is continuous if is open in for each basic open set .   "
},
{
  "id": "thm_prod_continuity",
  "level": "2",
  "url": "sec_proj_cont_prod.html#thm_prod_continuity",
  "type": "Theorem",
  "number": "20.4",
  "title": "",
  "body": "  Let for from to and be topological spaces, and let be a function. Then is continuous if and only if is continuous for each .    Let for from to and be topological spaces, and let be a function. If is continuous, the facts that each is continuous and that composites of continuous functions are continuous show that is continuous for each .  Now suppose that is continuous for each . Recall that is a subbasis for the product topology on . To prove that is continuous, tells us that it is enough to show that is open for each in . Let be an open set in . tells us that , which is open in because is continuous. Therefore, is continuous.   "
},
{
  "id": "sec_prop_prod_top",
  "level": "1",
  "url": "sec_prop_prod_top.html",
  "type": "Section",
  "number": "",
  "title": "Properties of Products of Topological Spaces",
  "body": " Properties of Products of Topological Spaces  It is natural to ask what topological properties of the topological spaces and are inherited by the product . We have studied Hausdorff, connected, and compact spaces, and we now consider those properties.    Let and be Hausdorff spaces.    What will it take to prove that the space with the product topology is Hausdorff?    Suppose that . What does the fact that is Hausdorff tell us about and ? What can we say about and ?    Complete the proof of the following theorem.    If and are Hausdorff spaces, then with the product topology is a Hausdorff space.      The proofs that a product of connected spaces is connected, that a product of path connected spaces is path connected, and that a product of compact spaces is compact are a bit more complicated. To prove that a product of two connected spaces is connected, we will use the result of in that the union of connected subsets is connected if the intersection of the subsets is nonempty. A consequence of this result is the following.    Let be a topological space, and let be a connected subset of for all in some indexing set . Let be a connected subset of such that for every . Then is connected.    Let be a topological space, and let be a connected subset of for all in some indexing set . Let be a connected subset of such that for every . For each let . Let . Since , shows that is connected. Given that is not empty, and , we see that . allows us to conclude that is connected. But , and so is connected.    We will use to show that a product of connected spaces is connected.    If and are connected topological spaces, then with the product topology is a connected topological space.    Assume and are connected topological spaces. Our approach to proving that is connected is to write as a union of two connected subspaces whose intersection is not empty. Let . The space is homeomorphic to via the inclusion map which sends to the point . Since is connected, so is . Let . The space is homeomorphic to via the inclusion map which sends to the point . Since is connected, so is . (The verification of these homeomorphisms is left to the reader.) The point is in , so for every . It follows that is connected by . All that remains is to prove that and we will have demonstrated that is connected. The fact that and for every implies that . It then remains to show that . Let . Then and and . Thus, and so . Therefore, is connected.    Once we know that a product of connected topological spaces is connected, we can extend that result to any finite number of connected spaces by induction.    Let be a connected topological space for from 1 to . Then the product is connected.    The proof is left to .  We conclude this section by demonstrating that a product of compact topological spaces is compact. It is also true that finite products of path connected and compact spaces are path connected and compact. The proofs are left to and .    If and are compact topological spaces, then is a compact topological space under the product topology.    Let and be compact topological spaces. Let be an open cover of for in some indexing set . Let and let . Since is homeomorphic to , we know that is compact. The collection is an open cover of , and so has a finite sub-cover . The set is an open set that contains . We will show that there is a neighborhood of that contains the entire set .  Cover the set with open sets that are contained in (since is open, we can intersect any open set with and still have an open set). Each open set is a union of basis elements, so we can cover with basis elements that are contained in . Since is compact, there is a finite collection , , , of basis elements contained in that cover . Assume that each intersects (otherwise, we can remove that set and still have a cover). Let . Since for each , we know that is not empty. Each is open in and so is open in . Thus, is a neighborhood of in . Now we demonstrate that . Let . Since the collection covers , the point is in for some between and . So . But , so . Thus, and we conclude that .  So for each , the set contains a set of the form , where is a neighborhood of in . So is covered by a finite sub-cover of our open cover of . The collection is an open cover of . Since is compact, the is a finite sub-cover , , , of the open cover of . is an open cover of . It follows that the sets , , , is a cover of . For each , the set is covered by finitely many of the sets in , and so the collection of these sets forms a finite sub-cover of in . Therefore, is compact.    "
},
{
  "id": "activity-111",
  "level": "2",
  "url": "sec_prop_prod_top.html#activity-111",
  "type": "Activity",
  "number": "20.8",
  "title": "",
  "body": "  Let and be Hausdorff spaces.    What will it take to prove that the space with the product topology is Hausdorff?    Suppose that . What does the fact that is Hausdorff tell us about and ? What can we say about and ?    Complete the proof of the following theorem.    If and are Hausdorff spaces, then with the product topology is a Hausdorff space.     "
},
{
  "id": "lem_Connected_union",
  "level": "2",
  "url": "sec_prop_prod_top.html#lem_Connected_union",
  "type": "Lemma",
  "number": "20.6",
  "title": "",
  "body": "  Let be a topological space, and let be a connected subset of for all in some indexing set . Let be a connected subset of such that for every . Then is connected.    Let be a topological space, and let be a connected subset of for all in some indexing set . Let be a connected subset of such that for every . For each let . Let . Since , shows that is connected. Given that is not empty, and , we see that . allows us to conclude that is connected. But , and so is connected.   "
},
{
  "id": "thm_connected_product",
  "level": "2",
  "url": "sec_prop_prod_top.html#thm_connected_product",
  "type": "Theorem",
  "number": "20.7",
  "title": "",
  "body": "  If and are connected topological spaces, then with the product topology is a connected topological space.    Assume and are connected topological spaces. Our approach to proving that is connected is to write as a union of two connected subspaces whose intersection is not empty. Let . The space is homeomorphic to via the inclusion map which sends to the point . Since is connected, so is . Let . The space is homeomorphic to via the inclusion map which sends to the point . Since is connected, so is . (The verification of these homeomorphisms is left to the reader.) The point is in , so for every . It follows that is connected by . All that remains is to prove that and we will have demonstrated that is connected. The fact that and for every implies that . It then remains to show that . Let . Then and and . Thus, and so . Therefore, is connected.   "
},
{
  "id": "corollary-13",
  "level": "2",
  "url": "sec_prop_prod_top.html#corollary-13",
  "type": "Corollary",
  "number": "20.8",
  "title": "",
  "body": "  Let be a connected topological space for from 1 to . Then the product is connected.   "
},
{
  "id": "thm_compact_product",
  "level": "2",
  "url": "sec_prop_prod_top.html#thm_compact_product",
  "type": "Theorem",
  "number": "20.9",
  "title": "",
  "body": "  If and are compact topological spaces, then is a compact topological space under the product topology.    Let and be compact topological spaces. Let be an open cover of for in some indexing set . Let and let . Since is homeomorphic to , we know that is compact. The collection is an open cover of , and so has a finite sub-cover . The set is an open set that contains . We will show that there is a neighborhood of that contains the entire set .  Cover the set with open sets that are contained in (since is open, we can intersect any open set with and still have an open set). Each open set is a union of basis elements, so we can cover with basis elements that are contained in . Since is compact, there is a finite collection , , , of basis elements contained in that cover . Assume that each intersects (otherwise, we can remove that set and still have a cover). Let . Since for each , we know that is not empty. Each is open in and so is open in . Thus, is a neighborhood of in . Now we demonstrate that . Let . Since the collection covers , the point is in for some between and . So . But , so . Thus, and we conclude that .  So for each , the set contains a set of the form , where is a neighborhood of in . So is covered by a finite sub-cover of our open cover of . The collection is an open cover of . Since is compact, the is a finite sub-cover , , , of the open cover of . is an open cover of . It follows that the sets , , , is a cover of . For each , the set is covered by finitely many of the sets in , and so the collection of these sets forms a finite sub-cover of in . Therefore, is compact.   "
},
{
  "id": "sec_prod_top_summ",
  "level": "1",
  "url": "sec_prod_top_summ.html",
  "type": "Section",
  "number": "",
  "title": "Summary",
  "body": " Summary  Important ideas that we discussed in this section include the following. Throughout, let be topological spaces for from to some integer    The product of the is the Cartesian product .    The set is a basis for the box topology on .    The mapping defined by is the projection map onto for from 1 to .    A function mapping a topological space to is continuous if and only if is continuous for every from to .    Let be a topological space. A subset of is a subbasis for if the set of all finite intersections of elements of is a basis for .    If each is (a) connected, (b) path connected, (c) compact, then is (a) connected, (b) path connected, (c) compact with respect to the product topology.     "
},
{
  "id": "sec_prod_top_exer",
  "level": "1",
  "url": "sec_prod_top_exer.html",
  "type": "Exercises",
  "number": "",
  "title": "Exercises",
  "body": "  Let and be topological spaces, where with and with . Find all of the sets of the form and verify that these sets generate the product topology on .   Let for from to be topological spaces and let . Show that the collection is a subbasis for the box topology on .    Let be the set of real numbers with the standard Euclidean metric topology and let be the real numbers with the discrete topology.   Explain why the set of all horizontal intervals of the form is a base for the product topology on .   Find the interior and closure of each of the following subsets of .                Let and be topological space and let be a subset of and a subset of . Assume the product topology on . Prove each of the following.            Let and be topological spaces and let and be collections of open sets in and , respectively, for some indexing sets and . Show that .    If , , , and are sets, show that .   If is a base for a topology on a space and is a base for a topology on a space , show that is a base for the product topology on .    Prove that the product of any finite number of connected spaces is connected.    Prove that the product of any finite number of compact spaces is compact.    Prove that if and are path connected topological spaces, then with the product topology is a path connected topological space.   Prove that the product of any finite number of path connected spaces is path connected.    Let and be topological spaces and . Is it true that if is compact, then both and are compact. Prove your answer.    Let and be topological spaces and let be the projection mapping. We have shown that is continuous. Now show that is an open map for equal 1 and 2. Assume the standard product topology.    Let and be topological spaces with cardinalities at least 2. Let . Prove that the product space topology on is the discrete topology if and only if the topologies on and are the discrete topologies.    For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. Throughout, let and be topological spaces and with the product topology.   If and , then .   If and , then .   If and , then .   If is an open subset of and is an open subset of , then is an open subset of .   If is a subset of and is a subset of and is an open subset of , then is an open subset of and is an open subset of .   If is a closed subset of and is a closed subset of , then is a closed subset of .   If is a subset of and is a subset of and is a closed subset of , then is a closed subset of and is a closed subset of .   "
},
{
  "id": "ex_subbasis",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_subbasis",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let and be topological spaces, where with and with . Find all of the sets of the form and verify that these sets generate the product topology on .   Let for from to be topological spaces and let . Show that the collection is a subbasis for the box topology on .  "
},
{
  "id": "exercise-242",
  "level": "2",
  "url": "sec_prod_top_exer.html#exercise-242",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be the set of real numbers with the standard Euclidean metric topology and let be the real numbers with the discrete topology.   Explain why the set of all horizontal intervals of the form is a base for the product topology on .   Find the interior and closure of each of the following subsets of .              "
},
{
  "id": "ex_product_closure",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_product_closure",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let and be topological space and let be a subset of and a subset of . Assume the product topology on . Prove each of the following.          "
},
{
  "id": "ex_unions_cross_products",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_unions_cross_products",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let and be topological spaces and let and be collections of open sets in and , respectively, for some indexing sets and . Show that .  "
},
{
  "id": "exercise-245",
  "level": "2",
  "url": "sec_prod_top_exer.html#exercise-245",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " If , , , and are sets, show that .   If is a base for a topology on a space and is a base for a topology on a space , show that is a base for the product topology on .  "
},
{
  "id": "ex_connected_product",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_connected_product",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Prove that the product of any finite number of connected spaces is connected.  "
},
{
  "id": "ex_compact_product",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_compact_product",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Prove that the product of any finite number of compact spaces is compact.  "
},
{
  "id": "ex_path_connected_product",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_path_connected_product",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Prove that if and are path connected topological spaces, then with the product topology is a path connected topological space.   Prove that the product of any finite number of path connected spaces is path connected.  "
},
{
  "id": "exercise-249",
  "level": "2",
  "url": "sec_prod_top_exer.html#exercise-249",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Let and be topological spaces and . Is it true that if is compact, then both and are compact. Prove your answer.  "
},
{
  "id": "ex_projection_open",
  "level": "2",
  "url": "sec_prod_top_exer.html#ex_projection_open",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let and be topological spaces and let be the projection mapping. We have shown that is continuous. Now show that is an open map for equal 1 and 2. Assume the standard product topology.  "
},
{
  "id": "exercise-251",
  "level": "2",
  "url": "sec_prod_top_exer.html#exercise-251",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let and be topological spaces with cardinalities at least 2. Let . Prove that the product space topology on is the discrete topology if and only if the topologies on and are the discrete topologies.  "
},
{
  "id": "exercise-252",
  "level": "2",
  "url": "sec_prod_top_exer.html#exercise-252",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " For each of the following, answer true if the statement is always true. If the statement is only sometimes true or never true, answer false and provide a concrete example to illustrate that the statement is false. If a statement is true, explain why. Throughout, let and be topological spaces and with the product topology.   If and , then .   If and , then .   If and , then .   If is an open subset of and is an open subset of , then is an open subset of .   If is a subset of and is a subset of and is an open subset of , then is an open subset of and is an open subset of .   If is a closed subset of and is a closed subset of , then is a closed subset of .   If is a subset of and is a subset of and is a closed subset of , then is a closed subset of and is a closed subset of .  "
},
{
  "id": "sec_prod_top_app",
  "level": "1",
  "url": "sec_prod_top_app.html",
  "type": "Section",
  "number": "",
  "title": "Applications of Products of Topological Spaces",
  "body": " Applications of Products of Topological Spaces  Computers represent information from the real world digitally. That is, a computer screen consists of discrete pixels that are used to mimic the continuous information from the real world. So we exist in , but a computer screen represents information in as illustrated in . It is important to be able to accurately mimic the continuous information from digital data. One of the key ideas is to have a digital version of the Jordan curve theorem which states that a Jordan curve (a continuous loop that does not intersect itself) in the Euclidean plane separates the remainder of the plane into two connected components (the inside and the outside of the curve). Additionally, if a single point is removed from a Jordan curve, the remainder of the plane becomes connected. The reason a digital Jordan curve theorem is important is that it is only necessary to save the Jordan curves which determine regions, along with the associated colors of the regions, rather than having to save the color of every single pixel in an image.   Left: The digital plane. Middle: -neighbors of a point. Right: -neighbors of a point.        A natural start to building a digital topology might be to identify neighborhoods. The idea of a neighborhood is to consider elements that are close to a point, and in the digital world there are different ways to do this. Given a point in , the 4-neighbors of are the points vertically or horizontally adjacent to : that is, the points and . The 8-neighbors of are the 4-neighbors along with the points diagonally adjacent to : that is, , , . These neighbors are illustrated in , with the crosses indicating the neighbors of the highlighted point.  In the continuous case, we define a path between points to be a continuous function from to the space. However, we cannot have continuity in the digital world. So we define paths by moving through neighbor points. That is, if is either or , a -path is a finite sequence , , , in such that is a -neighbor of , is a -neighbor of , , and is a -neighbor of .    Show that there is a -path connecting any two points in . Then explain why there is an -path connecting any two points in .    In the continuous case, every Jordan curve separates into two connected regions. To have a similar theorem in the discrete case, we need a notion of connectedness in . Every image is made up of a finite number of pixels, and so we can think of a digital image as existing in a finite subspace of . Since connectedness and path connectedness are equivalent in finite topological spaces, we us the idea of -paths to define connectedness in . We say that a subset of is if if any two of its points can be joined by a -path in . show two sets (curves) in the digital plane indicated by the points that connect the line segments (examples taken from A Topological Approach to Digital Topology, T. Yung Kong, R. Kopperman, and P. Meyer, American Mathematical Monthly , 98 (1991), no. 10, 901-917). Let be the set illustrated at left in and the set at right.   Sets (left) and (right) in the digital plane.       Is  connected? Is  connected? Verify your answer. Repeat with .    We can now define a Jordan -curve to be a finite -connected set which contains exactly two -neighbors for each of its points. Is a Jordan -curve? Is a Jordan -curve? Verify your answer. Repeat with .    As usual, we define a component to be a maximal connected set. Explain why is a Jordan -curve whose complement is connected and why is a Jordan -curve whose complement consists of three connected -components. This example shows that there is no Jordan curve theorem in digital topology using the standard notions of -connectedness with either or . So neither 4-adjacency nor 8-adjacency provides an analogue of the Jordan curve theorem and it is necessary to use a combination of both. That is, a Jordan -curve with at least five points separates into exactly two -components, and a Jordan -curve with at least five points separates into exactly two -components.    In we discussed the importance of a digital Jordan curve theorem. In the next activity we describe a topology in which such a theorem exists.   topology Khalimsky   Consider with the topology with basis , where   This topology is called the digital line topology or the Khalimsky topology on . Notice that all sets of the form are open when is odd.    Show that any set of the form where is even is closed in the digital line topology.    To define a Khalimsky topology on we use the product topology. Explain why the collection of sets where is a basis for the Khalimsky topology on . (This topology was originally published by E. Khalimsky in Applications of connected ordered topological spaces in topology , Conference of math. departments of Povolsia, 1970.)    Now we want to define a digital Jordan curve. Our first step is to define a digital path . Recall that a path in a topological space is a homeomorphism from the interval into the space. So we need the concept of a digital interval. If in , the digital interval  is the set .  The integers and are called the endpoints of the digital interval .   digital path  digital arc   Let be a topological space.   A digital path in is the range of a continuous function from a digital interval to .    A digital arc in X is the range of a homeomorphism from a digital interval to .       Let . Show that is not a digital path but and are digital paths.    To produce a digital Jordan Curve Theorem, we need a definition of a digital Jordan curve.   digital Jordan curve   A digital Jordan curve is a finite connected set with such that is a digital arc for each .  So every digital Jordan curve is a connected set. Show that any finite digital path in is a connected set.     Is every digital interval connected?    The upshot of all of this is the following theorem (a proof can be found in A Topological Approach to Digital Topology, T. Yung Kong, R. Kopperman, and P. Meyer, American Mathematical Monthly , 98 (1991), no. 10, 901-917).    If is a digital Jordan curve in the digital plane , then has exactly two components.    The two components in split the digital plane into an infinite region (the outside) and a finite region (the inside).  Show that is a digital Jordan curve (and thus splits into two connected components).    Digital Jordan curves, as described in , are important in order to have a digital Jordan curve theorem. Christer O. Kiselman presents the following theorem to characterize digital Jordan curves in Discrete Geometry for Computer Imagery , Springer-Verlag, 2000, p. 46-56.    A subset of equipped with the Khalimsky topology is a digital Jordan curve if and only if for some even integer and for all , and and no other points are adjacent to ; moreover each path consisting of three consecutive points , , turns at by or or not at all if is a pure point, and goes straight ahead if is mixed.    We investigate this theorem in the next activity.    We need to first define the appropriate terms. Let be a topological space. Two points and in are adjacent if and the set is connected. Then let to be the intersection of all neighborhoods of . Show that distinct elements and in a topological space are adjacent if and only if or .    A point in is called pure if and have the same parity. Otherwise, the point is mixed . Find if is a pure point or a mixed point.    In we show that the set is not a digital path and so not a digital Jordan curve. Which part of does violate?    In we show that the set is a digital Jordan curve. Show that in , the property from that and and no other points are adjacent to is satisfied for each .    "
},
{
  "id": "F_Digital_plane",
  "level": "2",
  "url": "sec_prod_top_app.html#F_Digital_plane",
  "type": "Figure",
  "number": "20.10",
  "title": "",
  "body": " Left: The digital plane. Middle: -neighbors of a point. Right: -neighbors of a point.       "
},
{
  "id": "act_digital_graph_theory",
  "level": "2",
  "url": "sec_prod_top_app.html#act_digital_graph_theory",
  "type": "Activity",
  "number": "20.9",
  "title": "",
  "body": "  Show that there is a -path connecting any two points in . Then explain why there is an -path connecting any two points in .    In the continuous case, every Jordan curve separates into two connected regions. To have a similar theorem in the discrete case, we need a notion of connectedness in . Every image is made up of a finite number of pixels, and so we can think of a digital image as existing in a finite subspace of . Since connectedness and path connectedness are equivalent in finite topological spaces, we us the idea of -paths to define connectedness in . We say that a subset of is if if any two of its points can be joined by a -path in . show two sets (curves) in the digital plane indicated by the points that connect the line segments (examples taken from A Topological Approach to Digital Topology, T. Yung Kong, R. Kopperman, and P. Meyer, American Mathematical Monthly , 98 (1991), no. 10, 901-917). Let be the set illustrated at left in and the set at right.   Sets (left) and (right) in the digital plane.       Is  connected? Is  connected? Verify your answer. Repeat with .    We can now define a Jordan -curve to be a finite -connected set which contains exactly two -neighbors for each of its points. Is a Jordan -curve? Is a Jordan -curve? Verify your answer. Repeat with .    As usual, we define a component to be a maximal connected set. Explain why is a Jordan -curve whose complement is connected and why is a Jordan -curve whose complement consists of three connected -components. This example shows that there is no Jordan curve theorem in digital topology using the standard notions of -connectedness with either or . So neither 4-adjacency nor 8-adjacency provides an analogue of the Jordan curve theorem and it is necessary to use a combination of both. That is, a Jordan -curve with at least five points separates into exactly two -components, and a Jordan -curve with at least five points separates into exactly two -components.   "
},
{
  "id": "act_digital_Jordan_curve",
  "level": "2",
  "url": "sec_prod_top_app.html#act_digital_Jordan_curve",
  "type": "Activity",
  "number": "20.10",
  "title": "",
  "body": " topology Khalimsky   Consider with the topology with basis , where   This topology is called the digital line topology or the Khalimsky topology on . Notice that all sets of the form are open when is odd.    Show that any set of the form where is even is closed in the digital line topology.    To define a Khalimsky topology on we use the product topology. Explain why the collection of sets where is a basis for the Khalimsky topology on . (This topology was originally published by E. Khalimsky in Applications of connected ordered topological spaces in topology , Conference of math. departments of Povolsia, 1970.)    Now we want to define a digital Jordan curve. Our first step is to define a digital path . Recall that a path in a topological space is a homeomorphism from the interval into the space. So we need the concept of a digital interval. If in , the digital interval  is the set .  The integers and are called the endpoints of the digital interval .   digital path  digital arc   Let be a topological space.   A digital path in is the range of a continuous function from a digital interval to .    A digital arc in X is the range of a homeomorphism from a digital interval to .       Let . Show that is not a digital path but and are digital paths.    To produce a digital Jordan Curve Theorem, we need a definition of a digital Jordan curve.   digital Jordan curve   A digital Jordan curve is a finite connected set with such that is a digital arc for each .  So every digital Jordan curve is a connected set. Show that any finite digital path in is a connected set.     Is every digital interval connected?    The upshot of all of this is the following theorem (a proof can be found in A Topological Approach to Digital Topology, T. Yung Kong, R. Kopperman, and P. Meyer, American Mathematical Monthly , 98 (1991), no. 10, 901-917).    If is a digital Jordan curve in the digital plane , then has exactly two components.    The two components in split the digital plane into an infinite region (the outside) and a finite region (the inside).  Show that is a digital Jordan curve (and thus splits into two connected components).   "
},
{
  "id": "thm_digital_curve",
  "level": "2",
  "url": "sec_prod_top_app.html#thm_digital_curve",
  "type": "Theorem",
  "number": "20.15",
  "title": "",
  "body": "  A subset of equipped with the Khalimsky topology is a digital Jordan curve if and only if for some even integer and for all , and and no other points are adjacent to ; moreover each path consisting of three consecutive points , , turns at by or or not at all if is a pure point, and goes straight ahead if is mixed.   "
},
{
  "id": "activity-114",
  "level": "2",
  "url": "sec_prod_top_app.html#activity-114",
  "type": "Activity",
  "number": "20.11",
  "title": "",
  "body": "  We need to first define the appropriate terms. Let be a topological space. Two points and in are adjacent if and the set is connected. Then let to be the intersection of all neighborhoods of . Show that distinct elements and in a topological space are adjacent if and only if or .    A point in is called pure if and have the same parity. Otherwise, the point is mixed . Find if is a pure point or a mixed point.    In we show that the set is not a digital path and so not a digital Jordan curve. Which part of does violate?    In we show that the set is a digital Jordan curve. Show that in , the property from that and and no other points are adjacent to is satisfied for each .   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
