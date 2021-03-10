function HeaderClick(headerTab) {
    HideAllWindows();
    HideAllHeaderSelected();
    switch (headerTab) {
        case 'World':
            var worldHeader = document.getElementById("main-box-header-world-btn");
            var textBox = document.getElementById("text-area-item");
            var optionsBox = document.getElementById("option-area-grid");
            var partyBox = document.getElementById("party-box-item");

            // Change selected header
            worldHeader.classList.add('main-box-header-item-selected');

            // Show Text, Options, Party
            textBox.classList.remove('hidden');
            optionsBox.classList.remove('hidden');
            partyBox.classList.remove('hidden');

            break;
        case 'Equipment':
            var worldHeader = document.getElementById("main-box-header-equipment-btn");
            var equipmentBox = document.getElementById("equipment-area-grid");
            var inventoryBox = document.getElementById("inventory-area-grid");

            // Change selected header
            worldHeader.classList.add('main-box-header-item-selected');

            // Show Equipment and Inventory
            equipmentBox.classList.remove('hidden');
            inventoryBox.classList.remove('hidden');
            break;
    }
}

function HideAllWindows() {
    var equipmentBox = document.getElementById("equipment-area-grid");
    var inventoryBox = document.getElementById("inventory-area-grid");
    var textBox = document.getElementById("text-area-item");
    var optionsBox = document.getElementById("option-area-grid");
    var partyBox = document.getElementById("party-box-item");
    // Hide
    equipmentBox.classList.add('hidden');
    inventoryBox.classList.add('hidden');
    textBox.classList.add('hidden');
    optionsBox.classList.add('hidden');
    partyBox.classList.add('hidden');
}

function HideAllHeaderSelected() {
    var worldHeader = document.getElementById("main-box-header-world-btn");
    var equipmentHeader = document.getElementById("main-box-header-equipment-btn");
    var journalHeader = document.getElementById("main-box-header-journal-btn");
    var kingdomHeader = document.getElementById("main-box-header-kingdom-btn");
    var configHeader = document.getElementById("main-box-header-config-btn");
    worldHeader.classList.remove('main-box-header-item-selected');
    equipmentHeader.classList.remove('main-box-header-item-selected');
    journalHeader.classList.remove('main-box-header-item-selected');
    kingdomHeader.classList.remove('main-box-header-item-selected');
    configHeader.classList.remove('main-box-header-item-selected');
}