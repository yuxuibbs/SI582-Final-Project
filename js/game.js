function printGazeteer() {
    // Gazeteer information on each president
    var prezInfo = [
        "1",
        "George Washington",
        "Lived 1732-1799",
        "Born in Virginia",
        "Died in Virginia",
        "President 1789-1797",
        "Party: None",
        "2",
        "John Adams",
        "Lived 1735-1826",
        "Born in Massachusetts",
        "Died in Massachusetts",
        "President 1797-1801",
        "Party: Federalist",
        "3",
        "Thomas Jefferson",
        "Lived 1743-1826",
        "Born in Virginia",
        "Died in Virginia",
        "President 1801-1809",
        "Party: Democrat-Republican",
        "4",
        "James Madison",
        "Lived 1751-1836",
        "Born in Virginia",
        "Died in Virginia",
        "President 1809-1817",
        "Party: Democrat-Republican",
        "5",
        "James Monroe",
        "Lived 1758-1831",
        "Born in Virginia",
        "Died in New York",
        "President 1817-1825",
        "Party: Democrat-Republican",
        "6",
        "John Quincy Adams",
        "Lived 1767-1848",
        "Born in Massachusetts",
        "Died in Washington, D.C.",
        "President 1825-1829",
        "Party: Democrat-Republican",
        "7",
        "Andrew Jackson",
        "Lived 1767-1845",
        "Born in South Carolina",
        "Died in Tennessee",
        "President 1829-1837",
        "Party: Democratic",
        "8",
        "Martin Van Buren",
        "Lived 1782-1862",
        "Born in New York",
        "Died in New York",
        "President 1837-1841",
        "Party: Democratic",
        "9",
        "William Henry Harrison",
        "Lived 1773-1841",
        "Born in Virginia",
        "Died in Washington, D.C.",
        "President 1841-1841",
        "Party: Whig",
        "10",
        "John Tyler",
        "Lived 1790-1862",
        "Born in Virginia",
        "Died in Virginia",
        "President 1841-1845",
        "Party: Whig",
        "11",
        "James Polk",
        "Lived 1795-1849",
        "Born in North Carolina",
        "Died in Tennessee",
        "President 1845-1849",
        "Party: Democratic",
        "12",
        "Zachary Taylor",
        "Lived 1784-1850",
        "Born in Virginia",
        "Died in Washington, D.C.",
        "President 1849-1850",
        "Party: Whig",
        "13",
        "Millard Fillmore",
        "Lived 1800-1874",
        "Born in New York",
        "Died in New York",
        "President 1850-1853",
        "Party: Whig",
        "14",
        "Franklin Pierce",
        "Lived 1804-1869",
        "Born in New Hampshire",
        "Died in New Hampshire",
        "President 1853-1857",
        "Party: Democratic",
        "15",
        "James Buchanan",
        "Lived 1791-1868",
        "Born in Pennsylvania",
        "Died in Pennsylvania",
        "President 1857-1861",
        "Party: Democratic",
        "16",
        "Abraham Lincoln",
        "Lived 1809-1865",
        "Born in Kentucky",
        "Died in Washington, D.C.",
        "President 1861-1865",
        "Party: Republican",
        "17",
        "Andrew Johnson",
        "Lived 1808-1875",
        "Born in North Carolina",
        "Died inTennessee",
        "President 1865-1869",
        "Party: Democratic",
        "18",
        "Ulysses Grant",
        "Lived 1822-1885",
        "Born in Ohio",
        "Died in New York",
        "President 1869-1877",
        "Party: Republican",
        "19",
        "Rutherford Hayes",
        "Lived 1822-1893",
        "Born in Ohio",
        "Died in Ohio",
        "President 1877-1881",
        "Party: Republican",
        "20",
        "James Garfield",
        "Lived 1831-1881",
        "Born in Ohio",
        "Died in New Jersey",
        "President 1881-1881",
        "Party: Republican",
        "21",
        "Chester Arthur",
        "Lived 1830-1886",
        "Born in Vermont",
        "Died in New York",
        "President 1881-1885",
        "Party: Republican",
        "22",
        "Grover Cleveland",
        "Lived 1837-1908",
        "Born in New Jersey",
        "Died in New Jersey",
        "President 1885-1889",
        "Party: Democratic",
        "23",
        "Benjamin Harrison",
        "Lived 1833-1901",
        "Born in Ohio",
        "Died in Indiana",
        "President 1889-1893",
        "Party: Republican",
        "24",
        "Grover Cleveland",
        "Lived 1837-1908",
        "Born in New Jersey",
        "Died in New Jersey",
        "President 1893-1897",
        "Party: Democratic",
        "25",
        "William McKinley",
        "Lived 1843-1901",
        "Born in Ohio",
        "Died in New York",
        "President 1897-1901",
        "Party: Republican",
        "26",
        "Theodore Roosevelt",
        "Lived 1858-1919",
        "Born in New York",
        "Died in New York",
        "President 1901-1909",
        "Party: Republican",
        "27",
        "William Taft",
        "Lived 1857-1930",
        "Born in Ohio",
        "Died in Washington, D.C.",
        "President 1909-1913",
        "Party: Republican",
        "28",
        "Woodrow Wilson",
        "Lived 1856-1924",
        "Born in Virginia",
        "Died in Washington, D.C.",
        "President 1913-1921",
        "Party: Democratic",
        "29",
        "Warren Harding",
        "Lived 1865-1923",
        "Born in Ohio",
        "Died in California",
        "President 1921-1923",
        "Party: Republican",
        "30",
        "Calvin Coolidge",
        "Lived 1872-1933",
        "Born in Vermont",
        "Died in Massachusetts",
        "President 1923-1929",
        "Party: Republican",
        "31",
        "Herbert Hoover",
        "Lived 1874-1964",
        "Born in Iowa",
        "Died in New York",
        "President 1929-1933",
        "Party: Republican",
        "32",
        "Franklin Roosevelt",
        "Lived 1882-1945",
        "Born in New York",
        "Died in Georgia",
        "President 1933-1945",
        "Party: Democratic",
        "33",
        "Harry Truman",
        "Lived 1884-1972",
        "Born in Missouri",
        "Died in Missouri",
        "President 1945-1953",
        "Party: Democratic",
        "34",
        "Dwight Eisenhower",
        "Lived 1890-1969",
        "Born in Texas",
        "Died in Washington, D.C.",
        "President 1953-1961",
        "Party: Republican",
        "35",
        "John Kennedy",
        "Lived 1917-1963",
        "Born in Massachusetts",
        "Died in Texas",
        "President 1961-1963",
        "Party: Democratic",
        "36",
        "Lyndon Johnson",
        "Lived 1908-1973",
        "Born in Texas",
        "Died in Texas",
        "President 1963-1969",
        "Party: Democratic",
        "37",
        "Richard Nixon",
        "Lived 1913-1994",
        "Born in California",
        "Died in New York",
        "President 1969-1974",
        "Party: Republican",
        "38",
        "Gerald Ford",
        "Lived 1913-2006",
        "Born in Nebraska",
        "Died in California",
        "President 1974-1977",
        "Party: Republican",
        "39",
        "James Carter",
        "Lived 1924-",
        "Born in Georgia",
        "Died in",
        "President 1977-1981",
        "Party: Democratic",
        "40",
        "Ronald Reagan",
        "Lived 1911-2004",
        "Born in Illinois",
        "Died in California",
        "President 1981-1989",
        "Party: Republican",
        "41",
        "George H. W. Bush",
        "Lived 1924-",
        "Born in Massachusetts",
        "Died in",
        "President 1989-1993",
        "Party: Republican",
        "42",
        "William Clinton",
        "Lived 1946-",
        "Born in Arkansas",
        "Died in",
        "President 1993-2001",
        "Party: Democratic",
        "43",
        "George W. Bush",
        "Lived 1946-",
        "Born in Connecticut",
        "Died in",
        "President 2001-2009",
        "Party: Republican",
        "44",
        "Barack Obama",
        "Lived 1961-",
        "Born in Hawaii",
        "Died in",
        "President 2009-2017",
        "Party: Democratic",
        "45",
        "Donald Trump",
        "Lived 1946-",
        "Born in New York",
        "Died in",
        "President 2017-",
        "Party: Republican"
        ];

    // Get info about presidents range and question difficulty level
    // Default is 1-12 and easy mode
    var prezRange = 0;
    var startPrez = 0;
    var stopPrez = 84;
    var difficultyLevel = "easy";

    var getInfo = new URL(window.location.href);
    prezRange = parseInt(getInfo.searchParams.get('prezRange'));
    difficultyLevel = getInfo.searchParams.get('questionLevel');

    // startPrez starts at the correct president number and goes through the section of presidents info that is relevant to the question
    if (prezRange == 1) {
        startPrez = 84;
        stopPrez = 168;
    }
    else if (prezRange == 2) {
        startPrez = 168;
        stopPrez = 236;
    }
    else if (prezRange == 3) {
        startPrez = 238;
        stopPrez = 314;
    }

    var prezAnswers = "";

    for (var i = startPrez; i < stopPrez; i += 7) {
        prezAnswers += `
            <div class="form-check-inline col-lg-2 col-md-3 col-sm-4">
                <label class="form-check-label">
                    <input class="form-check-input" name="answer" type="radio" value="` + parseInt(prezInfo[i]) + `"/>` 
                    +
                    prezInfo[i]
                    +
                    `<br/>
                    <strong>`
                    +
                    prezInfo[i + 1]
                    +
                    `</strong>
                    <br/>`
                    +
                    prezInfo[i + 2]
                    +
                    `<br/>`
                    +
                    prezInfo[i + 3]
                    +
                    `<br/>`
                    +
                    prezInfo[i + 4]
                    +
                    `<br/>`
                    +
                    prezInfo[i + 5]
                    +
                    `<br/>`
                    +
                    prezInfo[i + 6]
                    +
                    `<br/>
                </label>
            </div>
            `;
    }

    // place possible answers on page
    document.getElementById("answers").innerHTML = prezAnswers;

    return prezRange;
}

function questions(prezRange) {
    var answer;
    if (prezRange == 0) {
        $("#clue6").text("I was the first president whose wife died while I was in office. I was the only president to hold office in the Confederacy. Five years after leaving office, I was so poor I was unable to pay a bill for $1.25 until I had sold my corn crop.");
        $('#clue4').text("Shortly after I became President, Congress passed two bills to create a new Bank of the United States. I vetoed both as unconstitutional, the second amid charges that I had expressed my approval privately before it was passed. An uproar followed where all the members of my cabinet except Daniel Webster resigned in allegiance to Whig Congressional leaders.");
        $("#clue2").text('I was the one president who was not a U.S. citizen when I died. A native of Virginia, I died in that state as a citizen of the Southern Confederacy.');
        answer = 10;
    }
    else if (prezRange == 1) {
        $("#clue6").text('During my second year at Bowdoin College in Maine, I had the lowest grades in my class. I changed my study habits, and graduated third in my class. Among my classmates were Nathaniel Hawthorne and Henry Wadsworth Longfellow.');
        $("#clue4").text('Rufus King, my first vice-president, was sworn in outside the U.S. and never set foot in Washington during my term. King, an alcoholic with tuberculosis, traveled to Cuba following his election to try to regain his health. His health did not improve, however, and he was unable to travel to Washington when the time came to be sworn in, so he took the oath in Cuba, propped up by his aides. Within a month. it was clear that he was dying, so he returned to his Alabama plantation where he died after only six weeks as vice-president.');
        $("#clue2").text('A renewal of the storm between the North and the South occurred during my presidency. This was due mainly to the Kansas-Nebraska Act, which repealed the Missouri Compromise and reopened the question of slavery in the West. This measure, the handiwork of Senator Stephen A. Douglas, grew in part out of his desire to promote a railroad from Chicago to California through Nebraska.');
        answer = 14;
    }
    else if (prezRange == 2) {
        $("#clue6").text('I invited Booker T. Washington to dinner at the White House – an action that was denounced by Democrats. During my administration, the first Olympic games in the U.S. were held as part of the St.Louis World’s Fair.');
        $("#clue4").text('My oldest child was called “Princess Alice.” Women across the country had dresses made in the “Alice Blue” shade she favored. She was the first president’s daughter to have her age 18 “coming out” ball in the White House.');
        $("#clue2").text('I was the first vice president to become president by death to go on and win election on his own.');
        answer = 26;
    }
    else {
        $("#clue6").text('There was an eight-year gap between my service as vice-president and the start of my presidency. During this gap, I unsuccessfully ran for president and for the governorship of my native state.');
        $("#clue4").text('As a youth, I showed interest in public speaking and drama and took piano and violin lessons. After graduating from a college in my native state, I won a scholarship to a law school in a faraway state. I returned to my native state to practice law. Although my religion made me eligible for conscientious objector status, I enlisted in the Navy during World War II.');
        $("#clue2").text('I wrote nine books after my retirement from politics. The last one, Beyond Peace, was finished just before my death. Five current or former presidents attended my funeral.');
        answer = 37;
    }
}

function next_clue() {
    var count = $(this).data("count") || 0;
    $(this).data("count", ++count);
    if (count == 1) {
        $("#clue4").css('visibility', "visible");
    }
    else if (count == 2) {
        $("#clue2").css('visibility', "visible");
        $("#next-clue").remove();
    }
}

$(document).ready(function() {
    questions(printGazeteer());
});

$("form").submit(function() {
    $.ajax({
        async: false,
        method: "GET",
        url: "score.html",
        data: $(this).serialize(),
    });
});