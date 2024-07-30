$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
// filter items on button click
$('.filter-button-group').on('click', function () {

    var filterValue = $(this).attr('data-filter');
    // console.log(filterValue)
    $('.grid').isotope({ filter: filterValue });
});