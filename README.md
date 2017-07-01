Blackjack game
=================

Summary - This application is meant to test what decisions are best for every scenerio a blackjack player may encounter. For example, if you have 5,8 and the dealer is showing an A... what decision should you make. Now, it's obviously hit but there are a lot of scenerios that can be confusing at least for me and I'm trying to solve them logically. I'm well aware that the casino always has an advantage unless you count cards so this is just to lessen the damage if that makes sense. I do want to add counting functionality eventually to test different counting methods and their effectiviness but that's down the road. I started writing this is C but the object functionality in Node makes it much quicker to write in Node... and I'm playing this weekend =). I'll finish up the C version soon and push that up.

This application requires Node 8... or babel I guess. It's up to you. It utilizes async await

TODO:
1) Move the hand funtionality into the hand class... this should NOT be done by the player. The whole process has to be duplicated between the player and the dealer and it breaks OO Design big time.
2) Add split functionality to the decision process
3) Add double down functionality to the decision process
4) Add a decision matrix to handle different decisions.