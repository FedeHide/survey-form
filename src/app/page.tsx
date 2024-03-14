'use client'
import { useState, type FormEvent } from 'react'

export default function Home(): JSX.Element {
	const [value, setValue] = useState<string>('default')

	const handleSubmit = (e: FormEvent<HTMLDivElement>): void => {
		alert('Formulario Enviado')
	}

	const handleChange = (e: FormEvent<HTMLSelectElement>): void => {
		setValue((e.target as HTMLSelectElement).value)
	}

	return (
		<section className="container">
			<h1 id="title" className="title">
				freeCodeCamp Survey Form
			</h1>
			<p id="description">Registration</p>
			<form id="survey-form" action="#">
				{/* user data inputs */}
				<div className="user">
					<div className="input-box">
						<label htmlFor="name" id="name-label" className="details">
							Full Name
						</label>
						<input id="name" type="text" placeholder="Enter your name" required />
					</div>
					<div className="input-box">
						<label htmlFor="username" id="username-label" className="details">
							Username
						</label>
						<input
							id="username"
							type="text"
							placeholder="Enter your Username"
							required
						/>
					</div>
					<div className="input-box">
						<label htmlFor="email" id="email-label" className="details">
							Email
						</label>
						<input id="email" type="email" placeholder="Enter your email" required />
					</div>
					<div className="input-box">
						<label htmlFor="number" id="number-label" className="details">
							Age
						</label>
						<input
							id="number"
							type="number"
							placeholder="age"
							min="10"
							max="99"
							required
						/>
					</div>
				</div>
				{/* gender input radios */}
				<div className="gender-details">
					<input value="male" type="radio" name="gender" id="dot-1" />
					<input value="female" type="radio" name="gender" id="dot-2" />
					<input value="prefer not to say" type="radio" name="gender" id="dot-3" />
					<span className="gender-title">Gender</span>
					<div className="category">
						<label htmlFor="dot-1">
							<span className="dot one"></span>
							<span className="gender">Male</span>
						</label>
						<label htmlFor="dot-2">
							<span className="dot two"></span>
							<span className="gender">Female</span>
						</label>
						<label htmlFor="dot-3">
							<span className="dot three"></span>
							<span className="gender">Prefer not to say</span>
						</label>
					</div>
				</div>
				{/* dropdown */}
				<div id="dropdown-box" className="dropdown-box">
					<p className="dropdown-title">How did you hear about us</p>
					<select
						name="role"
						id="dropdown"
						defaultValue={value}
						onChange={handleChange}
						required
					>
						<option disabled value="">
							Select an option
						</option>
						<option value="facekook">Facebook</option>
						<option value="instagram">Instagram</option>
						<option value="youtube">Youtube</option>
						<option value="web">Web</option>
						<option value="other">Other</option>
					</select>
				</div>
				{/* checkbox */}
				<div className="checkbox-box">
					<p className="checkbox-title">Select one or more options of your interest</p>
					<label htmlFor="software-development">
						<input
							type="checkbox"
							name="software-development"
							id="software-development"
							value="software-development"
							className=""
						/>
						Sofware Development
					</label>
					<label htmlFor="backend">
						<input
							type="checkbox"
							name="backend"
							id="backend"
							value="backend"
							className=""
						/>
						Backend
					</label>
					<label htmlFor="data-science">
						<input
							type="checkbox"
							name="data-science"
							id="data-science"
							value="data-science"
							className=""
						/>
						Data Science
					</label>
					<label htmlFor="cybersecurity">
						<input
							type="checkbox"
							name="cybersecurity"
							id="cybersecurity"
							value="cybersecurity"
							className=""
						/>
						Cybersecurity
					</label>
				</div>
				{/* textarea */}
				<div className="textarea-box">
					<p className="textarea-title">Any comments or suggestions?</p>
					<textarea
						placeholder="Enter your comment here..."
						name="textarea"
						id="textarea"
						cols={30}
						rows={10}
					></textarea>
				</div>
				{/* submit button */}
				<div onClick={handleSubmit} className="btn">
					<button id="submit" type="submit">
						Submit
					</button>
				</div>
			</form>
		</section>
	)
}
