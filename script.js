let elementNumber = 11; // Start with the next number after the existing items

    function addTenElements() {
      const ol = document.getElementById("infi-list");
      for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.innerText = `List Item ${elementNumber++}`;
        ol.appendChild(li);
      }
    }

    const infiList = document.getElementById("infi-list");

    infiList.addEventListener("scroll", () => {
      const totalScrollableHeight = infiList.scrollHeight;
      const visibleHeight = infiList.clientHeight;
      const scrolledHeight = infiList.scrollTop;
      const remainingHeightToBeScrolled = totalScrollableHeight - visibleHeight - scrolledHeight;

      if (remainingHeightToBeScrolled <= 4) {
        addTenElements();
      }
    });

    // Initial load
    addTenElements();