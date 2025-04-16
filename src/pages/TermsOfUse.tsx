import { Button } from '../components/ui/button'

export default function TermsOfUse() {
    return (
        <div className='space-y-10'>
            <h1 className='text-3xl uppercase text-center'>Condiciones generales de uso</h1>

            <div className='space-y-10'>
                <div className='text-justify leading-loose space-y-2'>
                    <h1 className='font-bold text-lg'>Articulo 1 ¿Quiénes somos? ¿Qué proponemos?</h1>
                    <p>1.1 La sociedad JUNG SAS («Back Market»), con domicilio social se encuentra en 199 rue Championnet 75018 París y está inscrita en el Registro Mercantil y de Sociedades de París con el n.º 804 049 476, pone a disposición del Usuario una Plataforma con el nombre «Back Market», con el fin de ponerlo en contacto con los Vendedores.</p>
                    <p>1.2 Back Market interviene como intermediario de alojamiento, no es Vendedor de los Productos ofertados y por lo tanto no se hace responsable de los Productos vendidos a través de la Plataforma, lo que el Usuario reconoce expresamente. Además, a menos que se indique lo contrario, Back Market no es un distribuidor autorizado de una marca.</p>
                    <p>1.3 El propósito de estas Condiciones de uso (CGU) es establecer las reglas de acceso a la Plataforma y el uso de los servicios ofrecidos en la Plataforma. No regulan las relaciones entre los Usuarios y los Vendedores que están sujetas a las condiciones generales de venta, disponibles aquí. En consecuencia, el usuario entiende y reconoce que cualquier cuestión o reclamación relativa a la compra de un Producto en la plataforma se rige por las condiciones generales de venta que se pueden consultar aquí.</p>
                    <p>1.4 Las CGU se aplican a cualquier usuario que navegue por la Plataforma, independientemente de si se ha registrado o no en ella. </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='font-bold text-lg'>Articulo 2 Algunas definiciones</h1>
                    <p>Siempre que, en las presentes CGU, se escriban las siguientes palabras, en singular o plural, con una letra mayúscula, tendrán el significado siguiente:</p>
                    <table className='bg-white rounded-lg shadow-sm'>
                        <tr>
                            <td className='p-4 font-semibold'>Usuario(s)</td>
                            <td className='p-4'>hará referencia a cualquier persona física o jurídica que utilice la Plataforma para comprar Productos con fines no comerciales. </td>
                        </tr>
                        <tr>
                            <td className='p-4 font-semibold'>CGU</td>
                            <td className='p-4'>hará referencia a las presentes condiciones generales de uso que rigen las relaciones entre los Usuarios y Back Market</td>
                        </tr>
                        <tr>
                            <td className='p-4 font-semibold'>Ficha del producto</td>
                            <td className='p-4'>hará referencia a la hoja de descripción de un Producto, proporcionada por el Vendedor.</td>
                        </tr>
                        <tr>
                            <td className='p-4 font-semibold'>Ficha del vendedor</td>
                            <td className='p-4'>hará referencia a la hoja de descripción de un Vendedor, proporcionada por el Vendedor.</td>
                        </tr>
                        <tr>
                            <td className='p-4 font-semibold'>Plataforma</td>
                            <td className='p-4'>hará referencia al sitio web disponible en www.backmarket.es y a la aplicación correspondiente.</td>
                        </tr>
                        <tr>
                            <td className='p-4 font-semibold'>Venedor(es)</td>
                            <td className='p-4'>harán referencia a cualquier vendedor profesional de Productos inscrito en la Plataforma</td>
                        </tr>
                    </table>
                </div>

                <div className='text-justify leading-loose space-y-2'>
                    <h1 className='font-bold text-lg'>Artículo 3 ¿Cómo crear una cuenta de cliente?</h1>
                    <p>3.1 Las CGU deberán ser aceptadas, sin reservas, por cada usuario de la Plataforma. El usuario se encarga de leer las CGU, de aceptarlas y de registrarlas en un soporte duradero. El rechazo de las CGU al crear su cuenta de cliente impide al usuario crear su cuenta de cliente y/o, por lo tanto, realizar un pedido en la Plataforma. Dado que es posible que las CGU evolucionen, se invita al Usuario a estar atento, ya que las CGU pueden evolucionar entre dos visitas sucesivas a la Plataforma.</p>
                    <p>3.2 La creación de una cuenta de cliente solo está autorizada a las personas físicas y a las personas jurídicas de derecho privado que no actúen con fines profesionales. Las personas físicas deben ser mayores de 16 años para poder comprar Productos en la Plataforma y tener capacidad para realizar actos jurídicos. Si las personas físicas tienen entre 16 y 18 años, deben contar con el permiso de sus padres o tutores legales.</p>
                </div>
            </div>

            <div className='text-center'>
                <a href='https://assets.ctfassets.net/mmeshd7gafk1/2rcFCk6wDRvc9pXFitzwyc/3b6a5d0af80ced9507b5be5b46777ef1/CGU_ES_November_2022.docx.pdf'>
                    <Button size="lg">
                        Ver PDF completo
                    </Button>
                </a>
            </div>
            
        </div>
    )
}
