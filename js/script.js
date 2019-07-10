// set focus on name field

$('#name').focus();

$('#other-title').hide();

$('#title').change(function () {

    // if the 'option' value is selected, show the job title text field
    if

        ($('#title option:selected').val() === "other") {

        $('#other-title').show();
    }

    else {
        $('#other-title').hide();
    }
});

// hide the "colors" id

$('#colors-js-puns').hide();

// function to show and hide shirt selection when "JS Puns" and "Heart JS" is selected

$('#design').on('change', function () {



    if ($('#design').val() == 'js puns') {

        for (let i = 0; i < $('#color').children().length; i++) {

            // 'containsjspuns' is the index of JS Puns within the children of the colors ID

            var optionString = $('#color').children().eq(i).text();
            var containsjspuns = optionString.indexOf('JS Puns');

            $('#colors-js-puns').show();

            if (containsjspuns >= 0) {

                $('#color').children().eq(i).show();
                $('#color').children().eq(i).attr('selected', true);
            }
            else {

                $('#color').children().eq(i).hide();
            }
        }

    }
    else if ($('#design').val() == 'heart js') {

        for (let i = 0; i < $('#color').children().length; i++) {

            var optionString = $('#color').children().eq(i).text();
            var containsjsshirt = optionString.indexOf('JS shirt');

            $('#colors-js-puns').show();

            if (containsjsshirt >= 0) {

                $('#color').children().eq(i).show();
                $('#color').children().eq(i).attr('selected', true);
            }
            else {

                $('#color').children().eq(i).hide();
            }
        }
    }

});

// activites function 



let totalCost = 0;

// appending cost label to the activities class 

$('.activities').append('<label>Total Cost: $0</label>');

// function to disable workshop options with conflicting times 

$('.activities').on('change', function (e) {

    const jsFrameworks = $('input[name = "js-frameworks"]');
    const exWorkshop = $('input[name = "express"]')
    const node = $('input[name = "node"]');
    const jsLibs = $('input[name = "js-libs"]')
    e.preventDefault();

    // disable express workshop if js frameworks is checked and vice versa
    if (jsFrameworks.is(':checked')) {
        exWorkshop.prop('disabled', true);
    }
    else {
        exWorkshop.prop('disabled', false)
    }

    if (exWorkshop.is(':checked')) {
        jsFrameworks.prop('disabled', true);
    }
    else {
        jsFrameworks.prop('disabled', false)
    }

    // node.js and js libraries workshops conflicting

    if (node.is(':checked')) {
        jsLibs.prop('disabled', true);
    }
    else {
        jsLibs.prop('disabled', false)
    }
    if (jsLibs.is(':checked')) {
        node.prop('disabled', true);
    }
    else {
        node.prop('disabled', false)

    }



    var activitySelected = event.target;
    var activityInfo = activitySelected.parentNode.textContent;
    var containsDollarSign = activityInfo.indexOf('$');
    var price = activityInfo.slice(containsDollarSign + 1);

    if (activitySelected.checked) {
        totalCost += parseInt(price);
    }
    else {
        totalCost -= parseInt(price);
    }

    $('.activities label').last().text('Total Cost: $' + totalCost);





});



$('select option[value="select_method]').hide();
$('select option[value = "credit card"]').attr("selected", true);


$bitcoinParagraph = $("body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p")
$paypalParagraph = $("body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p")
$bitcoinParagraph.hide();
$paypalParagraph.hide();


// function to hide and show paypal, credit card and bitcoin options 

$('#payment').change(function () {

    if
        ($('#payment').val() === "credit card") {
        $('#credit-card').show();
        $bitcoinParagraph.hide();
        $paypalParagraph.hide();
    }

    else if
        ($('#payment').val() === "bitcoin") {

        $bitcoinParagraph.show();
        $('#credit-card').hide();
        $paypalParagraph.hide();


    }
    else {
        $bitcoinParagraph.hide();
        $('#credit-card').hide();
        $paypalParagraph.show();
    }


});


// Validation Section

// must be valid email (with error indications)

// function with regex to apply red border as indicators

function emailInput() {
    let emailregex = /^[^@]+@[^@.]+\.[^@.]+$/;
    let email = $('#mail').val();
    if (emailregex.test(email)) {
        $('#mail').css({ border: "none" });
        return true;
    }

    else {
        $('#mail').css({ border: "3px solid red" })
        return false;
    }

}
$('#mail').keyup(function () {
    emailInput();
});


function activityInput() {

    if ($('input[type="checkbox"]').is(":checked")) {

        $('.activities legend').text("Register for Activities:").css('color', '#093F57');
        return true;

    }
    else if ($('input[type="checkbox"]').is(":not(:checked)")) {
        $('.activities legend').text("Please select at least one activity").css('color', 'red');
        return false;
    }
}

($('input[type="checkbox"]').on('change', (event) => {
    activityInput();
}));
// must be valid name (with error indications)

function nameInput() {
    let nameregex = /^[a-zA-Z]/;
    let name = $('#name').val();
    if (nameregex.test(name)) {
        $('#name').css({ border: "none" })
        return true;
    } else {
        $('#name').css({ border: "3px solid red" })

        return false;
    }
}

$('#name').keyup(function () {
    nameInput();
});

// must be valid cc number, cvv number, and zip code (with error indications)

function ccInput() {
    let ccregex = /^\d{13,16}$/;
    let ccVal = $('#cc-num').val();
    if (ccregex.test(ccVal)) {
        $('#cc-num').css({ border: "none" })

        return true;

    } else {

        $('#cc-num').css({ border: "3px solid red" })
        return false;
    }
}
$('#cc-num').keyup(function () {
    ccInput();
});


function cvvInput() {
    const CVVregex = /^\d{3}$/;
    let CVVval = $('#cvv').val();
    if (CVVregex.test(CVVval)) {
        $('#cvv').css({ border: "none" })
        return true;
    }

    else {

        $('#cvv').css({ border: "3px solid red" })
        return false;
    }
}
$('#cvv').keyup(function () {
    cvvInput();
});


function zipInput() {
    const zipregex = /^\d{5}$/;
    let zipVal = $('#zip').val();
    if (zipregex.test(zipVal)) {
        $('#zip').css({ border: "none" })

        return true;

    } else {

        $('#zip').css({
            border: "3px solid red"
        })
        return false;

    }
}


$('#zip').keyup(function () {
    zipInput();
});

// submit function that calls all of my regex functions
// if functions come back false, the page prevents from submitting the form
// needed seperate if statements for credit card, bitcoin, and paypal

$('form').on('submit', (event) => {

    if ($('#payment').val() === 'credit card') {
        if (emailInput() === true & zipInput() === true & cvvInput() === true & activityInput() === true & ccInput() === true & nameInput() === true) {

            return true;
        }
        else { event.preventDefault(); }
    }

    if ($('#payment').val() === 'bitcoin' || 'paypal') {
        if (emailInput() === false & zipInput() === false & cvvInput() & activityInput() === false & ccInput() === false & nameInput() === false)

            return false;
    }
    else {
        event.preventDefault();
    }
});
