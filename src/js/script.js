$.ajax({
    url: "./data/data.json",
    sussecc: function(rs) {
        console.log(JSON.parse(rs));
    }
})