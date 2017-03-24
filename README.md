# message-board

## Epicodus JS Week 2 Project, 3/24/17

## By Charles Peden

## Description

A question and answer message board where a user submits a question and other users can respond with answers.
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Ruby](http://www.ruby-lang.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`
* `ember install emberfire`
* `gem install sass`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Known Bugs
* No Known Bugs

## Technologies Used
* Git, CSS, JS, Ember

## Implementation Plan
1. Develop User Stories
2. Lay out site plan:
  * Identify data models and relationships
  * Rough out visual flow of site
  * Map data flow through site
  * identify templates, routes and components
  * review data models
3. Create Data Seed in JSON format and populate firebase DB
4. Lay out document template
5. Implement functionality for user stories, 1 at a time.
6. Refactor MVP
7. Implement Stretch Goals


## User Stories
1. Guy comes to the site with a question about how to bake a cake.  He goes to the main page and looks at the existing questions, can look at links to previous questions, perhaps clicks a link of a likely post to read more fully on it, but discovers that nobody has yet written the definitive documentation on Battenberg, and decides to post his own question.  He clicks the post-question button which reveals a post form through which he is able to post his question on what amount of baking powder to put in his cake.  Upon Hitting submit, his question is displayed on the message board with all the others, tagged 'Battenberg'.  Latterly he discovers that he has unfortunately misspelled the legendary cake so he goes back to the site, clicks through to his post, hits the 'edit post' button, and corrects his unfortunate mis-spell.

2. Lady comes to the site, desirous of displaying her wisdom on the subject of all things bakery.  She scrolls through the available posts, before settling upon a particularly hapless and pathetic post by the would-be-Battenbergian.  She clicks 'respond to post' and is presented with a form in which she can enter her hard-won wisdom on the subject of kuchen.  Fills out the form and hits the submit button, upon which she can see her response attached to the original Battenberg post.

3. Years later, in another civilization, a third would-be baker trolls the internet searching for the long lost art of constructing the perfect Battenberg.  Comes across the post by user 1, the comment by user 2, tries out the revised Recipe, and is quite impressed.  Decides to upvote user 2's comment upon the subject.  He clicks the thumbs up button on the comment and the comment is now shown to have 1 upvote.

##Site plan
 1.  2 data models, posts and comments.  Posts has a 1 to many relationship with comments.  posts has following attributes: user, title, teaser, post-body, tags, and comments.  Comments has the following attributes: user, comment-body, vote-status.
 2. Routes: Contact, About, Index, Post/Post_ID
 3. Index Components: post-tile (post title, teaser, author, link to full post page; new-post (fillable form for a completely new post),
 4. Post/Post_ID Components: post-detail (all the post details) within which edit-post (form for editing/deleting the post), for each comment a comment-detail component displaying the full comment, author, vote status and upvote/downvote status.  within the comment-detail component a comment-edit component for edit/delete functionality.
 5. contact & about pages will be static.


## Copyright (c)
* 2017 Charles Peden

## License
* MIT
