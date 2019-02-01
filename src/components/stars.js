import React, { Component } from "react";

class Stars extends Component {
	render() {
		var starCoordinates = [
			{
				"starSize": "4px", "movement": 30,
				"left": "71%",
				"top": "83%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "65%",
				"top": "47%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "67%",
				"top": "66%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "16%",
				"top": "38%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "67%",
				"top": "0%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "52%",
				"top": "88%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "43%",
				"top": "68%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "0%",
				"top": "53%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "59%",
				"top": "75%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "40%",
				"top": "50%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "22%",
				"top": "38%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "5%",
				"top": "18%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "70%",
				"top": "56%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "20%",
				"top": "59%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "50%",
				"top": "49%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "39%",
				"top": "42%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "18%",
				"top": "41%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "55%",
				"top": "14%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "23%",
				"top": "13%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "3%",
				"top": "38%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "68%",
				"top": "48%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "96%",
				"top": "27%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "22%",
				"top": "24%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "69%",
				"top": "29%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "33%",
				"top": "80%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "65%",
				"top": "49%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "7%",
				"top": "4%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "9%",
				"top": "45%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "68%",
				"top": "30%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "74%",
				"top": "44%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "10%",
				"top": "76%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "78%",
				"top": "88%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "36%",
				"top": "0%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "1%",
				"top": "31%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "49%",
				"top": "56%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "22%",
				"top": "100%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "31%",
				"top": "30%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "22%",
				"top": "7%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "53%",
				"top": "25%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "53%",
				"top": "77%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "71%",
				"top": "96%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "53%",
				"top": "43%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "34%",
				"top": "76%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "8%",
				"top": "15%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "1%",
				"top": "51%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "89%",
				"top": "7%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "6%",
				"top": "44%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "28%",
				"top": "28%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "43%",
				"top": "14%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "74%",
				"top": "73%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "70%",
				"top": "58%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "19%",
				"top": "17%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "30%",
				"top": "29%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "87%",
				"top": "8%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "87%",
				"top": "76%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "69%",
				"top": "95%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "69%",
				"top": "30%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "8%",
				"top": "15%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "49%",
				"top": "39%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "17%",
				"top": "75%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "85%",
				"top": "64%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "59%",
				"top": "48%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "65%",
				"top": "70%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "78%",
				"top": "25%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "23%",
				"top": "94%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "26%",
				"top": "75%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "7%",
				"top": "64%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "12%",
				"top": "68%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "4%",
				"top": "41%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "88%",
				"top": "25%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "80%",
				"top": "11%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "41%",
				"top": "30%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "54%",
				"top": "14%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "96%",
				"top": "39%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "87%",
				"top": "49%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "51%",
				"top": "76%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "69%",
				"top": "7%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "84%",
				"top": "16%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "43%",
				"top": "55%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "86%",
				"top": "64%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "57%",
				"top": "66%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "82%",
				"top": "31%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "77%",
				"top": "41%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "43%",
				"top": "2%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "9%",
				"top": "95%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "51%",
				"top": "9%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "86%",
				"top": "95%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "19%",
				"top": "50%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "88%",
				"top": "11%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "94%",
				"top": "99%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "30%",
				"top": "78%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "75%",
				"top": "47%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "51%",
				"top": "63%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "50%",
				"top": "27%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "72%",
				"top": "55%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "45%",
				"top": "17%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "99%",
				"top": "66%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "70%",
				"top": "16%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "83%",
				"top": "91%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "90%",
				"top": "15%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "31%",
				"top": "13%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "71%",
				"top": "87%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "98%",
				"top": "79%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "65%",
				"top": "15%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "22%",
				"top": "97%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "11%",
				"top": "40%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "62%",
				"top": "94%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "66%",
				"top": "47%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "58%",
				"top": "4%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "8%",
				"top": "68%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "23%",
				"top": "63%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "32%",
				"top": "3%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "33%",
				"top": "88%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "34%",
				"top": "31%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "90%",
				"top": "77%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "81%",
				"top": "39%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "50%",
				"top": "79%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "31%",
				"top": "8%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "32%",
				"top": "24%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "19%",
				"top": "11%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "56%",
				"top": "74%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "90%",
				"top": "52%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "8%",
				"top": "92%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "92%",
				"top": "7%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "26%",
				"top": "95%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "6%",
				"top": "46%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "26%",
				"top": "30%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "44%",
				"top": "77%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "63%",
				"top": "64%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "71%",
				"top": "46%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "97%",
				"top": "73%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "59%",
				"top": "41%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "5%",
				"top": "41%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "37%",
				"top": "53%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "41%",
				"top": "20%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "87%",
				"top": "17%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "92%",
				"top": "82%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "62%",
				"top": "89%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "16%",
				"top": "49%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "24%",
				"top": "26%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "41%",
				"top": "52%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "50%",
				"top": "7%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "29%",
				"top": "8%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "7%",
				"top": "63%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "72%",
				"top": "92%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "58%",
				"top": "99%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "67%",
				"top": "12%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "7%",
				"top": "10%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "71%",
				"top": "6%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "97%",
				"top": "0%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "24%",
				"top": "35%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "28%",
				"top": "35%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "4%",
				"top": "38%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "23%",
				"top": "16%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "84%",
				"top": "61%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "15%",
				"top": "17%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "26%",
				"top": "44%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "85%",
				"top": "95%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "78%",
				"top": "89%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "64%",
				"top": "56%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "8%",
				"top": "88%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "73%",
				"top": "64%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "4%",
				"top": "65%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "51%",
				"top": "4%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "1%",
				"top": "22%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "15%",
				"top": "68%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "80%",
				"top": "10%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "21%",
				"top": "69%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "92%",
				"top": "38%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "55%",
				"top": "10%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "16%",
				"top": "62%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "97%",
				"top": "35%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "57%",
				"top": "84%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "62%",
				"top": "52%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "47%",
				"top": "87%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "48%",
				"top": "79%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "25%",
				"top": "35%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "28%",
				"top": "15%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "50%",
				"top": "86%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "56%",
				"top": "39%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "35%",
				"top": "48%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "31%",
				"top": "6%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "64%",
				"top": "39%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "1%",
				"top": "46%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "0%",
				"top": "28%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "29%",
				"top": "23%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "82%",
				"top": "42%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "81%",
				"top": "41%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "0%",
				"top": "98%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "48%",
				"top": "51%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "59%",
				"top": "37%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "1%",
				"top": "6%"
			},
			{
				"starSize": "5px", "movement": 10,
				"left": "24%",
				"top": "19%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "12%",
				"top": "34%"
			},
			{
				"starSize": "4px", "movement": 30,
				"left": "70%",
				"top": "13%"
			},
			{
				"starSize": "3px", "movement": 50,
				"left": "66%",
				"top": "95%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "2%",
				"top": "5%"
			},
			{
				"starSize": "1px", "movement": 80,
				"left": "23%",
				"top": "7%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "27%",
				"top": "89%"
			},
			{
				"starSize": "2px", "movement": 70,
				"left": "70%",
				"top": "61%"
			}
		]
		var stars = []
		for (let i = 0; i < 200; i++) {
			var element = <div onMouseMove={(e) => e.stopPropagation()} key={`star${i}`} style={{ width: starCoordinates[i].starSize, height: starCoordinates[i].starSize, "backgroundColor": "black", left: `calc(${starCoordinates[i].left} - ${this.props.offsetX / starCoordinates[i].movement}px)`, top: `calc(${starCoordinates[i].top} - ${this.props.offsetY / starCoordinates[i].movement}px)`, position: "absolute" }}></div>
			stars.push(element)
		}
		return stars
    }
}

export default Stars