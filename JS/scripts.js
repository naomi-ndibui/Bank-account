function Account(name, initial deposit, deposit amount, withdraw amount) {
  this.name = name;
  this.initialdeposit = initial deposit;
  this.depositamount = deposit amount;
  this.withdrawamount = withdraw amount;
}



$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedInitialAmount = $("input#new-initial-amount").val();

    var newAccount = new Account(inputtedName, inputtedInitialAmount);

    $("#account").append("<span class='account'>" + newAccount.name() + "</span>");
    $(".account").last().click(function() {
      $("#show-account").show();
      $(".name").text(newAccount.name);
      $(".initial-deposit").number(newAccount.initialdeposit);
    });

    $("input#new-name").val("");
    $("input#new-initial-deposit").val("");
  });
});
    $(document).ready(function() {
      $("form#new-deposit").submit(function(event) {
        event.preventDefault();

        var inputtedDepositAmount = $("input#new-deposit-amount").val();
        var inputtedWithdrawAmount = $("input#new-wihtdraw-amount").val();

        var newDeposit = new Deposit(inputtedDepositAmount, inputtedWithdrawAmount);

        $("#deposit").append("<span class='deposit'>" + newdeposit.initialDeposit() + "</span>");
        $(".deposit").last().click(function() {
          $("#show-deposit").show();
          $(".deposit-amount").number(newDeposit.depositamount);
          $(".withdraw-amount").number(newDeposit.withdrawamount);
        });

        $("input#new-deposit-amount").val("");
        $("input#new-withdraw-amount").val("");
      });
    });
