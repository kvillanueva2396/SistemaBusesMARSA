import React from "react";
import { Link } from "react-router-dom";
import { useLoteEditable } from "../../hooks/useLoteEditable";

export const HistorialItem = () => {
	const { lote } = useLoteEditable();

	return (
		<>
			{lote.map((item, index) => (
				<tr key={index}>
					<th scope="row" className="align-middle">
						{index + 1}
					</th>
					<td className="align-middle">{item.cod_lote}</td>
					<td className="align-middle">{item.fecha_salida.slice(0, 10)}</td>
					<td className="align-middle">{item.nombre_sede}</td>
					<td className="align-middle">{item.nombre_servicio}</td>
					<td className="d-flex align-middle">
						<Link
							className="btn btn-warning m-2"
							to={{
								pathname: "/historial-editar",
								state: {
									fecha_salida: item.fecha_salida.slice(0, 10),
									nombre_sede: item.nombre_sede,
									cod_Servicio: item.cod_servicio,
								},
							}}
						>
							Editar
						</Link>
					</td>
				</tr>
			))}
		</>
	);
};
