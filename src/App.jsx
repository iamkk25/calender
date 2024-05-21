import "./App.css";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
	return (
		<>
			<div className="calender">
				<div className="grid">
					<div className="header">
						<button className="navigation navigation--prev"> &lt; </button>
						<div className="info">
							<p className="month">May</p>
							<p className="fullday">{new Date().toDateString()}</p>
						</div>
						<button className="navigation navigation--next">&gt;</button>
					</div>
					<div className="week">
						{week.map((day, index) => (
							<div className="weekday" key={index}>
								{day}
							</div>
						))}
					</div>
					<div className="days">
						<p className="date--cell prev-month__date">28</p>
						<p className="date--cell prev-month__date">29</p>
						<p className="date--cell prev-month__date">30</p>
						<p className="date--cell">1</p>
						<p className="date--cell">2</p>
						<p className="date--cell">3</p>
						<p className="date--cell">4</p>
						<p className="date--cell">5</p>
						<p className="date--cell">6</p>
						<p className="date--cell">7</p>
						<p className="date--cell">8</p>
						<p className="date--cell">9</p>
						<p className="date--cell">10</p>
						<p className="date--cell">11</p>
						<p className="date--cell">12</p>
						<p className="date--cell">13</p>
						<p className="date--cell">14</p>
						<p className="date--cell">15</p>
						<p className="date--cell">16</p>
						<p className="date--cell">17</p>
						<p className="date--cell">18</p>
						<p className="date--cell">19</p>
						<p className="date--cell">20</p>
						<p className="date--cell">21</p>
						<p className="date--cell">22</p>
						<p className="date--cell">23</p>
						<p className="date--cell">24</p>
						<p className="date--cell">25</p>
						<p className="date--cell">26</p>
						<p className="date--cell">27</p>
						<p className="date--cell">28</p>
						<p className="date--cell">29</p>
						<p className="date--cell">30</p>
						<p className="date--cell">31</p>
						<p className="date--cell next-month__date">1</p>
						<p className="date--cell next-month__date">2</p>
						<p className="date--cell next-month__date">3</p>
						<p className="date--cell next-month__date">4</p>
						<p className="date--cell next-month__date">5</p>
						<p className="date--cell next-month__date">6</p>
						<p className="date--cell next-month__date">7</p>
						<p className="date--cell next-month__date">8</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
