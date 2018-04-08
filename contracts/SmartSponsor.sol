pragma solidity ^0.4.21;

contract SmartSponsor {
    string influencerName;
    string brandName;
    string terms;

    function set(string _influencerName, string _brandName, string _terms) public {
        influencerName = _influencerName;
        brandName = _brandName;
        terms = _terms;
    }

    function get() public constant returns (string,string,string) {
        return (influencerName,brandName,terms);
    }
}
