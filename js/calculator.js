// ========================== HOME LOAN ======================== //

function loanSliderHL() {
    let loan_limit = parseInt($('.loan_limit').val());
    if (document.getElementById('range-slider-input') != null) {
        var percent = document.getElementById('range-slider-input').value / loan_limit * 100; // here 3000000 is the max amount.
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('range-fill') != null) {
        document.getElementById('range-fill').style.height = percent + '%';
    }
    tenureSliderHL();
}

document.onload = loanSliderHL();

function tenureSliderHL() {
    let max = 0;
    let loan_amount = parseInt($('.hl_loan_amount').val());

    if (loan_amount > 0 && loan_amount <= 500000) {
        max = 5;
        $('.hl_tenure').attr('max', max);
    } else if (loan_amount > 500000 && loan_amount <= 1000000) {
        max = 7;
        $('.hl_tenure').attr('max', max);
    } else if (loan_amount > 1000000 && loan_amount <= 2000000) {
        max = 20;
        $('.hl_tenure').attr('max', max);
    } else if (loan_amount >= 2000000 && loan_amount <= 3000000) {
        max = 20;
        $('.hl_tenure').attr('max', max);
    }

    // $('.hl_tenure').val(max/2);

    let tenure = parseInt($('.hl_tenure').val());

    $('#hl_tenure_text').html(tenure);
    if (max == 5) {
        max += 1;
    }


    if (document.getElementById('range-slider-input2') != null) {
        var percent = document.getElementById('range-slider-input2').value / max * 100;
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('range-fill2') != null) {
        if ($('#range-slider-input2').val() == 1) {
            document.getElementById('range-fill2').style.height = '1%';
        } else if ($('#range-slider-input2').val() == $('#range-slider-input2').attr('max')) {
            document.getElementById('range-fill2').style.height = '100%';
        } else {
            document.getElementById('range-fill2').style.height = percent + '%';
        }
    }
}

document.onload = tenureSliderHL();

// ========================== HOME LOAN ======================== //

// ========================== TRACTOR LOAN ======================== //

function loanSliderTL() {
    let loan_limit = 3000000; //parseInt($('.loan_limit').val());

    if (document.getElementById('tl_loan_range_slider') != null) {
        var percent = document.getElementById('tl_loan_range_slider').value / loan_limit * 100; // here 3000000 is the max amount.
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('tl-loan-range-fill') != null) {
        document.getElementById('tl-loan-range-fill').style.height = percent + '%';
    }
    tenureSliderTL();
}

document.onload = loanSliderTL();

function tenureSliderTL() {
    let max = 10;
    let tenure = parseInt($('.tl_tenure').val());

    $('#tl_tenure_text').html(tenure);

    if (document.getElementById('tl-tenure-range-slider') != null) {
        var percent = document.getElementById('tl-tenure-range-slider').value / max * 100;
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('tl-tenure-range-fill') != null) {
        document.getElementById('tl-tenure-range-fill').style.height = percent + '%';
    }
}

document.onload = tenureSliderTL();

function dPaymentSliderTL() {
    let max = 30;
    let dpayment = parseInt($('.tl_dpayment').val());

    $('.tl_dpayment_text').html(dpayment);

    if (document.getElementById('tl-dp-range-slider') != null) {
        var percent = document.getElementById('tl-dp-range-slider').value / max * 100;
    }

    if (dpayment > 100) {
        dpayment = 100;
    }

    if (document.getElementById('tl-dp-range-fill') != null) {
        document.getElementById('tl-dp-range-fill').style.height = percent + '%';
    }
}

document.onload = dPaymentSliderTL();

// ========================== TRACTOR LOAN ======================== //

// ========================== SCHOOL LOAN ======================== //

function loanSliderSL() {
    let loan_limit = parseInt($('.loan_limit').val());
    if (document.getElementById('sl-loan-range-slider') != null) {
        var percent = document.getElementById('sl-loan-range-slider').value / loan_limit * 100; // here 3000000 is the max amount.
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('sl-loan-range-fill') != null) {
        document.getElementById('sl-loan-range-fill').style.height = percent + '%';
    }
    tenureSliderSL();
}

document.onload = loanSliderSL();

function tenureSliderSL() {
    let max = 10;
    let tenure = parseInt($('.sl_tenure').val());

    $('#sl_tenure_text').html(tenure);

    if (document.getElementById('sl-tenure-range-slider') != null) {
        var percent = document.getElementById('sl-tenure-range-slider').value / max * 100;
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('sl-tenure-range-fill') != null) {
        document.getElementById('sl-tenure-range-fill').style.height = percent + '%';
    }
}

document.onload = tenureSliderSL();

// ========================== SCHOOL LOAN ======================== //

// ========================== CV LOAN ======================== //

function loanSliderCVL() {
    let loan_limit = 3000000; //parseInt($('.loan_limit').val());

    if (document.getElementById('cvl_loan_range_slider') != null) {
        var percent = document.getElementById('cvl_loan_range_slider').value / loan_limit * 100; // here 3000000 is the max amount.
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('cvl-loan-range-fill') != null) {
        document.getElementById('cvl-loan-range-fill').style.height = percent + '%';
    }
    tenureSliderCVL();
}

document.onload = loanSliderCVL();

function tenureSliderCVL() {
    let max = 10;
    let tenure = parseInt($('.cvl_tenure').val());

    $('#cvl_tenure_text').html(tenure);

    if (document.getElementById('cvl-tenure-range-slider') != null) {
        var percent = document.getElementById('cvl-tenure-range-slider').value / max * 100;
    }

    if (percent > 100) {
        percent = 100;
    }

    if (document.getElementById('cvl-tenure-range-fill') != null) {
        document.getElementById('cvl-tenure-range-fill').style.height = percent + '%';
    }
}

document.onload = tenureSliderCVL();

function dPaymentSliderCVL() {
    let max = 50;
    let dpayment = parseInt($('.cvl_dpayment').val());

    $('.cvl_dpayment_text').html(dpayment);

    if (document.getElementById('cvl-dp-range-slider') != null) {
        var percent = document.getElementById('cvl-dp-range-slider').value / max * 100;
    }

    if (dpayment > 100) {
        dpayment = 100;
    }

    if (document.getElementById('cvl-dp-range-fill') != null) {
        document.getElementById('cvl-dp-range-fill').style.height = percent + '%';
    }
}

document.onload = dPaymentSliderCVL();

// ========================== CV LOAN ======================== //

// range slider

// function loadInitialValues(){
//     let tenure = currency_format(parseInt($('.hl_tenure').val()));

//     let loan_amount = parseInt($('.hl_loan_amount').val());
//     $('#hl_loan_amount_text').html(currency_format(loan_amount));
//     let processing_fee = 0;

//     if (loan_amount > 0 && loan_amount <= 500000) {
//         // console.log(500000);
//         processing_fee = (loan_amount * 2.5) / 100;

//         if (processing_fee > 3000) {
//             $('#hl_processing_fee').val(processing_fee);
//         } else {
//             $('#hl_processing_fee').val(3000);
//         }

//         $('.hl_tenure').attr('max', 5);
//         $('#hl_tandcs').val('-');
//         $('#hl_markups').val(15);
//         $('#hl_aprs').val(30);
//         $('#hl_insurance_rate').val(1160);
//     } else if (loan_amount > 500000 && loan_amount <= 1000000) {
//         // console.log(1000000);

//         processing_fee = (loan_amount * 0.5) / 100;

//         $('#hl_processing_fee').val(processing_fee);
//         $('.hl_tenure').attr('max', 7);
//         $('#hl_tandcs').val('-');
//         $('#hl_markups').val(10.016);
//         $('#hl_aprs').val(28);
//         $('#hl_insurance_rate').val(1160);
//     } else if (loan_amount > 1000000 && loan_amount <= 2000000) {
//         // console.log(2000000);

//         processing_fee = (loan_amount * 0.5) / 100;

//         $('#hl_processing_fee').val(processing_fee);
//         $('.hl_tenure').attr('max', 20);
//         $('#hl_tandcs').val('Unapproved Areas');
//         $('#hl_markups').val(8.31);
//         $('#hl_aprs').val(21);
//         $('#hl_insurance_rate').val(1730);
//     } else if (loan_amount >= 2000000 && loan_amount <= 3000000) {
//         // console.log(3000000);

//         processing_fee = (loan_amount * 0.5) / 100;

//         $('#hl_processing_fee').val(processing_fee);
//         $('.hl_tenure').attr('max', 20);
//         $('#hl_tandcs').val('Approved Areas');
//         $('#hl_markups').val(7.181);
//         $('#hl_aprs').val(18);
//         $('#hl_insurance_rate').val(2300);
//     }

//     // console.log(tenure);
//     $('.hl_tenure_text').html(tenure);
//     // calculateHL();
// }

// document.onload = loadInitialValues();

function currency_format(value) {
    var value_change = parseInt(value).toLocaleString('en-US');
    return value_change;
}