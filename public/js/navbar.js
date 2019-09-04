$(document).ready(function () {



    // Add Item Button For Modal Popup
    $("#addItem").on("click", function () {
        $("#addItemModal").show();
    });

    $(".delete").on("click", function () {
        $("#addItemModal").hide();
        $(".input").val("")
    });

    $("#addToPantry").on("click", function () {

      const dataToSend = {
        name:$('#nameSearch').val()
      }

      console.log(dataToSend);



      $.post('/api/addItem', dataToSend)
      .then(function(data){

        // $("#pantryList").append($("#pantryInput").val() + "<br>")
        // console.log($("#pantryInput").val())
        $(".modal").hide();
        $("#pantryInput").val("")

        console.log("THIS IS MY DATA")
        console.log(data);
        let nameValue = $("#nameSearch").val();
        let quantitySearch = $("#quantitySearch").val();
        let expDateSearch = $("#expDateSearch").val();
        let tbd = $("#tbd").val();

        $("#tableBody").append(`
            <tr id="${data.id}">
            <td>${nameValue}</td>
            <td>${quantitySearch}</td>
            <td>${expDateSearch}</td>
            </tr>
        `)

        $("#addItemModal").hide();
        $(".input").val("");

      })

    });

    $("#cancel").on("click", function () {
        $("#addItemModal").hide();
        $(".input").val("")
    });




    // Add Image Button
    $("#addImg").on("click", function () {


    });


    // Import From Loyalty Button
    $("#importLoyalty").on("click", function () {


    });

    // Delete On Clicked Row

    // let rowAnswer = $("#tableBody").text();

    $("#tableBody").on("click", 'tr', function(){
      // DESTROY to remove item from database.
      console.log(this.id);
      // const userId =
      const itemId = $(this).attr("id");

      $.ajax({
      method: "DELETE",
      url: "/api/deleteItem/" + itemId
    })

        $(this).remove();
    })


    // $("#tableBody").on("mouseleave","tr", function() {
    //     $(this).css('background', 'white')
    //     $(this).css('color', 'black')
    // })

    // $("#tableBody").on("mouseover", "tr", function() {
    //     $(this).css({
    //         'color': "white",
    //         'background': 'url( https://icon-library.net/images/trash-can-vector-icon/trash-can-vector-icon-15.jpg)',
    //         'background-size': "25% 2.2em",
    //         'background-repeat': "no-repeat",
    //         'background-position': "center"
    //     })
        // $(this).css('background', 'url( https://icon-library.net/images/trash-can-vector-icon/trash-can-vector-icon-15.jpg)')
        // $(this).css('background-size', "100% 2.2em")
        // $(this).css('background-repeat', "no-repeat")
        // $(this).css('background-position-x', "20px")

        // $(this).css('background-position', "center top")
    // })









});
