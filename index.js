const dropdown = document.getElementById('dropdown');
    for (let i = 0; i <= 10; i++) {
      const numberSpan = document.createElement('span');
      numberSpan.textContent = i;
      numberSpan.onclick = () => {
        numberInput.value = i;
        hideDropdown();
      };
      dropdown.appendChild(numberSpan);
    }

    function toggleDropdown() {
      if (dropdown.style.display === 'none') {
        showDropdown();
      } else {
        hideDropdown();
      }
    }

    function showDropdown() {
      dropdown.style.display = 'block';
    }

    function hideDropdown() {
      dropdown.style.display = 'none';
    }

   function showDatepicker() {
      $("#datepicker").datepicker("show");
    }

    // Function to toggle visibility of timeChoosing-cont
    function toggleTimeChoosingCont() {
      const timeChoosingCont = document.getElementById("timeChoosing-cont");
      timeChoosingCont.style.display = (timeChoosingCont.style.display === "none") ? "flex" : "none";
    }

    $("#datepicker").datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
      splitView: true,
      endDate: "2023-06-20",
      orientation: "bottom",
    });

    $("#datepicker").on("changeDate", function () {
      updateSelectedDate();
      toggleTimeChoosingCont();
    });

    function updateSelectedDate() {
      const selectedDateElement = document.querySelector(".selected-date");
      const currentDate = new Date($("#datepicker").datepicker("getDate"));

      // Get the day, month, and year separately
      const day = currentDate.toLocaleString("en-US", { weekday: "long" });
      const month = currentDate.toLocaleString("en-US", { month: "long" });
      const year = currentDate.getFullYear().toString().substr(-2); // Get the last 2 digits of the year

      selectedDateElement.textContent = `${day}, ${month} ${year}`;
    }
    function goPrevious() {
      const datepickerElement = $("#datepicker");
      const currentDate = datepickerElement.datepicker("getDate");
      const previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getDate() - 1);
      datepickerElement.datepicker("update", previousDate);
      updateSelectedDate();
    }

    function goNext() {
      const datepickerElement = $("#datepicker");
      const currentDate = datepickerElement.datepicker("getDate");
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + 1);
      datepickerElement.datepicker("update", nextDate);
      updateSelectedDate();
    }
    
let selectedSlot = null;

    function selectSlot(slotElement) {
      if (selectedSlot !== null) {
        selectedSlot.classList.remove('selected');
      }

      selectedSlot = slotElement;
      selectedSlot.classList.add('selected');
    }
    
    
function continueButton(){
    let tickets = document.getElementById("numberInput");
    let dTickets = document.getElementById("Tickets")
    let rate =document.getElementById("rate")
    let total = document.getElementById("total")
    dTickets.textContent = "Tickets = " + tickets.value
    rate.textContent = "Rate = $25"
    total.textContent = "Total = " +(tickets.value * 25) + ` (${tickets.value} X $25)`
    console.log(dTickets)
    console.log(tickets.value)
}
    
