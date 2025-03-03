// 创建一个基础的聊天机器人合约
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
contract ChatBot {
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }
    
    Message[] public messages;
    
    function sendMessage(string memory _content) public {
        messages.push(Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        }));
    }
    
    function getMessageCount() public view returns (uint256) {
        return messages.length;
    }
}
