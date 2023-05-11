class MetaNotFound(Exception):
	def __init__(self, type):
		super().__init__(f'MetaMessage of type "{type}" not found!')