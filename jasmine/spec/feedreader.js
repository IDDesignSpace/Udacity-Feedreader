/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {


    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('url is not empty', function() {
            for (let objects in allFeeds) {

                // This checks to see if allFeeds array has a property named "url"
                expect(allFeeds[objects].hasOwnProperty("url")).toBe(true);

                // This checks to see if the "url" property is empty
                expect(allFeeds[objects].url).not.toBe("");
            }
        })




        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // This is the second test I should write

        it('name is not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        })

   
    });


    
    describe("The menu",function() {

            it ("menu is hidden", function() {
                expect($('body').hasClass("menu-hidden")).toBe(true);
            });

            it ("menu changes visibility when clicked", function() {
                $('.menu-icon-link').trigger('click');  

                expect($('body').hasClass('menu-hidden')).not.toBe(true);
                
                $('.menu-icon-link').trigger('click'); 

                expect($('body').hasClass('menu-hidden')).toBe(true);



            });




    });
       

    

     describe('Initial Entries', function (){


            beforeEach(function(done) {
                loadFeed(0,done);
              
            });

         it('When LoadFeed is called and completed there is at least one .entry in .feed', function() {

             expect($(".feed .entry").children().length).toBeGreaterThan(0);
         });

     });
    
    describe('New Feed Selection',function() {
        var olderFeed;

        beforeEach(function(done) {
             loadFeed(0,function() {
                olderFeed = $(".feed").html();

                loadFeed(1,done);
             } );
        });

        it( "New content is loaded into feed on click", function() {
            expect($(".feed").html()).not.toBe(olderFeed);
        });

    });

  
}());
