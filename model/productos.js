import memoryPersist from './memoryPersist.js';
import fileSystemPersist from './fileSystemPersist.js';
import mongoPersist from './mongoPersist.js';
import SqlPersist from './sqlPersist.js';
import logger from '../winstonConfig.js';

/* -------------------------------------- */
/*                FACTORY                 */
/* -------------------------------------- */
class FactoryProductoModel {
	static set(opcion) {
		logger.info(`*** PERSISTENCIA SELECCIONADA **** [${opcion}]`);
		switch (opcion) {
			case 'Mem':
				return new memoryPersist();
			case 'File':
				return new fileSystemPersist();
			case 'Mongo':
				return new mongoPersist();
            case 'Sql':
				return new SqlPersist();
		}
	}
}

const opcion = process.argv[2] || 'Mem';

export default FactoryProductoModel.set(opcion);
