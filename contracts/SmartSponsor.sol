pragma solidity ^0.4.21;

contract SmartSponsor {
    string influencerName;
    //address influencerAccount;
    string brandName;
    string terms;
    uint256 funds;
    address bidder;
    string bidStatus;
    //bool contractComplete;

    function set(string _influencerName, string _brandName, string _terms) public {
        influencerName = _influencerName;
        //influencerAccount = _influencerAccount;
        brandName = _brandName;
        terms = _terms;
    }

    function get() external constant returns (string,string,string) {
        return (influencerName,brandName,terms);
    }

    function submitBid() external payable {
        funds = msg.value;
	       bidder = msg.sender;
	       bidStatus = "Bid Submitted";
	}
  /*
	function getStatus() external constant returns (address,address,uint256) {
	    return (bidder,influencerAccount,funds);
	}

	function acceptBid() external returns (string, bool) {
        if (influencerAccount != msg.sender) {
            revert();
        } else {
            bidStatus = "Bid Accepted";
            contractComplete = false;
            return (bidStatus, contractComplete);
        }
	}

	function completeWork() external returns (string, bool) {
        if (bidder != msg.sender) {
            revert();
        } else {
            contractComplete = true;
            bidStatus = "Contract Complete";
            return (bidStatus, contractComplete);
        }
	}

	function payout() external returns (string) {
	    if (contractComplete != true && msg.sender != bidder) {
	        revert();
	    } else {
	        influencerAccount.transfer(address(this).balance);
	        bidStatus = "Payout Complete!";
	        return bidStatus;
	    }
	}*/

}
