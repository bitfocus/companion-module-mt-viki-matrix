import { combineRgb } from '@companion-module/base'

export function getPresetDefinitions(self) {
	const presets = {}

	for (const input of self.CHOICES_INPUTS) {
		presets[`select_${input.id}`] = {
			type: 'button',
			category: 'Select Input',
			name: 'Select',
			style: {
				text: `${input.label}\\n> $(${self.config.label}:input_route${input.id})`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'select_input',
							options: {
								input: input.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'selected',
					options: {
						input: input.id,
					},
					style: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		}
	}

	for (const output of self.CHOICES_OUTPUTS) {
		presets[`switch_output_${output.id}`] = {
			type: 'button',
			category: 'Switch Output',
			name: 'Switch',
			style: {
				text: `${output.label}\\n< $(${self.config.label}:output_route${output.id})`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'switch_output',
							options: {
								output: output.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'output',
					options: {
						output: output.id,
					},
					style: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(0, 255, 0),
					},
				},
			],
		}
	}

	for (const input of self.CHOICES_INPUTS) {
		presets[`all_${input.id}`] = {
			type: 'button',
			category: 'In to All',
			name: 'All',
			style: {
				text: `${input.label}\\nTo All`,
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(32, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'all',
							options: {
								selected: false,
								input: input.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	for (const scene of self.CHOICES_SCENES) {
		presets[`save_scene_${scene.id}`] = {
			type: 'button',
			category: 'Scenes',
			name: `save_scene_${scene.id}`,
			style: {
				text: `Save Scene ${scene.id}`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(64, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'save_scene',
							options: {
								scene: scene.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
		presets[`recall_scene_${scene.id}`] = {
			type: 'button',
			category: 'Scenes',
			name: `recall_scene_${scene.id}`,
			style: {
				text: `Recall Scene ${scene.id}`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 64, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'recall_scene',
							options: {
								scene: scene.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	presets['toggle-keylock'] = {
		type: 'button',
		category: 'Switch keys',
		name: 'Toggle Keylock',
		style: {
			text: 'Toggle Keylock',
			size: 'auto',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 128, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'toggle_keylock',
						options: {},
					},
				],
				up: [],
			},
		],
		feedbacks: [
				{
					feedbackId: 'locked',
					options: {},
					style: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
		],
	}

	presets['toggle-beepEn'] = {
		type: 'button',
		category: 'Switch keys',
		name: 'Toggle Key Beep',
		style: {
			text: 'Toggle Key Beep',
			size: 'auto',
			color: combineRgb(0, 0, 0),
			bgcolor: combineRgb(255, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'toggle_beep',
						options: {},
					},
				],
				up: [],
			},
		],
		feedbacks: [
				{
					feedbackId: 'beepEnabled',
					options: {},
					style: {
						color: combineRgb(255, 255, 255),
						bgcolor: combineRgb(0, 128, 0),
					},
				},
		],
	}

	presets['beep'] = {
		type: 'button',
		category: 'Switch keys',
		name: 'Beep',
		style: {
			text: 'Beep',
			size: 'auto',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'beep',
						options: {},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['in-to-out'] = {
		type: 'button',
		category: 'In to Out',
		name: 'In to Out',
		style: {
			text: 'IN1 to OUT4',
			size: 'auto',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'input_output',
						options: {
							input: '1',
							output: '4',
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	return presets
}
