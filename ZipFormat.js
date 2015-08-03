function Locations(){
    this.NY = {
        Flushing: {
            name: "Flushing",
            href: "/Flushing",
            addr1: "25-44 Francis Lewis Blvd.",
            addr2: "Flushing NY 11358",
            phone: "(718) 353-1533",
            zip: "11358",
            lookUp: new ZipLookUp().Flushing.zip_codes
        },

        Ossining: {
            name: "Ossining",
            href: "/Ossining",
            addr1: "109 Croton Ave.",
            addr2: "Ossining NY 10562",
            phone: " (914) 588-8618",
            zip: "10562",
            lookUp: new ZipLookUp().Ossining.zip_codes
        },

        Eastchester: {
            name: "Eastchester",
            href: "/Eastchester",
            addr1: "360 White plains Rd.",
            addr2: "Eastchester NY 10709",
            phone: "(914) 779-8000",
            zip: "10709",
            lookUp: new ZipLookUp().Eastchester.zip_codes
        },

        Woodside: {
            name: "Woodside",
            href: "/Woodside",
            addr1: "69-01 Northern Blvd.",
            addr2: "Woodside NY 11377",
            phone: "(718) 803-1700",
            zip: "11377",
            lookUp: new ZipLookUp().Woodside.zip_codes
        },

        JacksonHeights: {
            name: "Jackson Heights",
            href: "/JacksonHeights",
            addr1: "84-02 Northern Blvd.",
            addr2: "Jackson Heights NY 11372",
            phone: "(718) 507-6500",
            zip: "11372",
            lookUp: new ZipLookUp().JacksonHeights.zip_codes
        }
    }//NY Locations

    this.NJ = {
        FortLee: {
            name: "Fort Lee",
            href: "/FortLee",
            addr1: "1211 Anderson Ave",
            addr2: "Fort Lee NJ 07024",
            phone: "(201) 224-7800",
            zip: "07024",
            lookUp: new ZipLookUp().FortLee.zip_codes
        },

        Hackensack: {
            name: "Hackensack",
            href: "/Hackensack",
            addr1: "380 W. Pleasantview Ave.",
            addr2: "Hackensack NJ 07601",
            phone: "(201) 342-2400",
            zip: "07601",
            lookUp: new ZipLookUp().Hackensack.zip_codes
        },

        WestNY: {
            name: "West New York",
            href: "/WestNY",
            addr1: "4915 Bergenline Ave.",
            addr2: "West New York NJ 07093",
            phone: "(201) 223-0200",
            zip: "07093",
            lookUp: new ZipLookUp().WestNY.zip_codes
        },

        NorthBergen: {
            name: "North Bergen",
            href: "/NorthBergen",
            addr1: "7705 Bergenline Avenue",
            addr2: "North Bergen NJ 07047",
            phone: "(201) 868-5425",
            zip: "07047",
            lookUp: new ZipLookUp().NorthBergen.zip_codes
        },

        Nutley: {
            name: "Nutley",
            href: "/Nutley",
            addr1: "242 Franklin Ave",
            addr2: "Nutley NJ 07110",
            phone: "(973) 542-1200",
            zip: "07110",
            lookUp: new ZipLookUp().Nutley.zip_codes
        }
    }//NJ Locations

    return this;
};


